import { httpClient } from './httpClient';

export async function sendEnrollment(course) {
  const payload = {
    courseId: course.id,
    title: course.title,
    area: course.area,
    professor: course.professor,
    source: 'expo-mobile-app',
    requestedAt: new Date().toISOString(),
  };

  const response = await httpClient.post('/posts', payload);
  return response.data;
}
