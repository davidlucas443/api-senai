import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function SchoolInfoCard() {
  return (
    <Card mode="contained" style={styles.card}>
      <Card.Content>
        <Text variant="titleLarge" style={styles.title}>
          Escola SENAI Suico-Brasileira
        </Text>
        <Text variant="bodyMedium" style={styles.text}>
          Formando profissionais para os desafios da industria e da tecnologia com ensino pratico,
          instrutores de mercado e projetos reais.
        </Text>
        <Text variant="bodyMedium" style={styles.text}>
          Aqui voce encontra trilhas em desenvolvimento de software, banco de dados, UX, metodos
          ageis e cloud para acelerar sua carreira.
        </Text>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    marginBottom: 16,
  },
  title: {
    fontWeight: '800',
    marginBottom: 8,
  },
  text: {
    lineHeight: 21,
    marginBottom: 6,
  },
});
