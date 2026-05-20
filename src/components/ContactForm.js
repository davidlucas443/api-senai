import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, HelperText, Text, TextInput } from 'react-native-paper';

const INITIAL_STATE = {
  name: '',
  email: '',
  message: '',
};

export default function ContactForm({ onSubmit, loading }) {
  const [form, setForm] = useState(INITIAL_STATE);
  const [showError, setShowError] = useState(false);

  const isInvalid = !form.name.trim() || !form.email.trim() || !form.message.trim();

  async function handleSubmit() {
    if (isInvalid) {
      setShowError(true);
      return;
    }

    await onSubmit(form);
    setForm(INITIAL_STATE);
    setShowError(false);
  }

  return (
    <Card mode="contained" style={styles.card}>
      <Card.Content>
        <Text variant="titleMedium" style={styles.title}>
          Fale com a escola
        </Text>
        <TextInput
          mode="outlined"
          label="Nome"
          value={form.name}
          onChangeText={(value) => setForm((prev) => ({ ...prev, name: value }))}
          style={styles.field}
        />
        <TextInput
          mode="outlined"
          label="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          value={form.email}
          onChangeText={(value) => setForm((prev) => ({ ...prev, email: value }))}
          style={styles.field}
        />
        <TextInput
          mode="outlined"
          label="Mensagem"
          multiline
          numberOfLines={4}
          value={form.message}
          onChangeText={(value) => setForm((prev) => ({ ...prev, message: value }))}
          style={styles.field}
        />

        <HelperText type="error" visible={showError && isInvalid}>
          Preencha nome, e-mail e mensagem para enviar o formulario.
        </HelperText>

        <View style={styles.actions}>
          <Button mode="contained" onPress={handleSubmit} loading={loading}>
            Enviar contato
          </Button>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 16,
    borderRadius: 20,
    marginBottom: 24,
  },
  title: {
    fontWeight: '700',
    marginBottom: 10,
  },
  field: {
    marginBottom: 8,
  },
  actions: {
    marginTop: 4,
  },
});
