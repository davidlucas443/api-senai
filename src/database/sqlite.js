import * as SQLite from 'expo-sqlite';
import { COURSE_SEED } from '../constants/courseSeed';

const DATABASE_NAME = 'senai_courses.db';
const DATABASE_VERSION = 1;

let databaseInstance;

async function getDatabase() {
  if (!databaseInstance) {
    databaseInstance = await SQLite.openDatabaseAsync(DATABASE_NAME);
  }
  return databaseInstance;
}

export async function initializeDatabase() {
  const db = await getDatabase();

  const versionRow = await db.getFirstAsync('PRAGMA user_version');
  let currentVersion = Number(versionRow?.user_version || 0);

  if (currentVersion >= DATABASE_VERSION) {
    return db;
  }

  if (currentVersion === 0) {
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS courses (
        id INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        subtitle TEXT NOT NULL,
        level TEXT NOT NULL,
        duration TEXT NOT NULL,
        area TEXT NOT NULL,
        professor TEXT NOT NULL,
        rating REAL NOT NULL,
        description TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS enrollments (
        id INTEGER PRIMARY KEY NOT NULL,
        course_id INTEGER NOT NULL,
        student_name TEXT NOT NULL,
        created_at TEXT NOT NULL,
        FOREIGN KEY (course_id) REFERENCES courses(id)
      );
    `);

    const coursesCountRow = await db.getFirstAsync('SELECT COUNT(*) AS total FROM courses');
    const coursesCount = Number(coursesCountRow?.total || 0);

    if (coursesCount === 0) {
      for (const course of COURSE_SEED) {
        await db.runAsync(
          'INSERT INTO courses (title, subtitle, level, duration, area, professor, rating, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
          [
            course.title,
            course.subtitle,
            course.level,
            course.duration,
            course.area,
            course.professor,
            course.rating,
            course.description,
          ]
        );
      }
    }

    currentVersion = 1;
  }

  await db.execAsync(`PRAGMA user_version = ${currentVersion}`);

  return db;
}

export async function getCourses(areaFilter = 'Todas') {
  const db = await getDatabase();

  if (areaFilter && areaFilter !== 'Todas') {
    return db.getAllAsync(
      'SELECT * FROM courses WHERE area = $area ORDER BY title ASC',
      { $area: areaFilter }
    );
  }

  return db.getAllAsync('SELECT * FROM courses ORDER BY area ASC, title ASC');
}

export async function saveEnrollment(courseId, studentName = 'Visitante') {
  const db = await getDatabase();
  const createdAt = new Date().toISOString();

  return db.runAsync(
    'INSERT INTO enrollments (course_id, student_name, created_at) VALUES (?, ?, ?)',
    [courseId, studentName, createdAt]
  );
}
