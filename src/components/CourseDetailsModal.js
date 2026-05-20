import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Divider, Modal, Portal, Text } from 'react-native-paper';
import RatingStars from './RatingStars';

export default function CourseDetailsModal({
  visible,
  course,
  onDismiss,
  onEnroll,
  onContact,
  submitting,
}) {
  if (!course) {
    return null;
  }

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onDismiss} contentContainerStyle={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text variant="headlineSmall" style={styles.title}>
            {course.title}
          </Text>
          <Text variant="titleSmall" style={styles.subtitle}>
            {course.subtitle}
          </Text>

          <View style={styles.row}>
            <Text variant="bodyMedium">Nivel: {course.level}</Text>
            <Text variant="bodyMedium">Duracao: {course.duration}</Text>
          </View>

          <Text variant="bodyMedium" style={styles.textBlock}>
            Area: {course.area}
          </Text>
          <Text variant="bodyMedium" style={styles.textBlock}>
            Professor: {course.professor}
          </Text>

          <Text variant="bodyMedium" style={styles.description}>
            {course.description}
          </Text>

          <RatingStars rating={course.rating} />

          <Divider style={styles.divider} />

          <View style={styles.buttonContainer}>
            <Button mode="contained" onPress={() => onEnroll(course)} loading={submitting}>
              Realizar matricula
            </Button>
            <Button mode="outlined" onPress={() => onContact(course)}>
              Contato com a escola
            </Button>
            <Button onPress={onDismiss}>Fechar</Button>
          </View>
        </ScrollView>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    margin: 16,
    borderRadius: 20,
    padding: 20,
    maxHeight: '85%',
  },
  title: {
    fontWeight: '800',
  },
  subtitle: {
    marginTop: 4,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  textBlock: {
    marginBottom: 6,
  },
  description: {
    marginVertical: 10,
    lineHeight: 22,
  },
  divider: {
    marginVertical: 16,
  },
  buttonContainer: {
    gap: 10,
  },
});
