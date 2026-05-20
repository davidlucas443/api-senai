import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Chip, Text } from 'react-native-paper';
import RatingStars from './RatingStars';

export default function CourseCard({ course, onPress }) {
  return (
    <Card mode="contained" style={styles.card}>
      <Card.Content>
        <Chip compact style={styles.chip}>
          {course.area}
        </Chip>
        <Text variant="titleMedium" style={styles.title}>
          {course.title}
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          {course.subtitle}
        </Text>

        <Text variant="bodySmall" style={styles.meta}>
          Nivel: {course.level} | Duracao: {course.duration}
        </Text>
        <Text variant="bodySmall" style={styles.meta}>
          Professor: {course.professor}
        </Text>

        <RatingStars rating={course.rating} />

        <Button mode="contained" style={styles.button} onPress={() => onPress(course)}>
          Ver detalhes
        </Button>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 12,
    borderRadius: 18,
  },
  chip: {
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  title: {
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    marginBottom: 8,
    opacity: 0.9,
  },
  meta: {
    marginBottom: 4,
  },
  button: {
    marginTop: 12,
  },
});
