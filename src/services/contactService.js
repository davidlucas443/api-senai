import { httpClient } from './httpClient';

export async function sendContact(payload) {
  const response = await httpClient.post('/posts', {
    ...payload,
    source: 'senai-suico-app',
    createdAt: new Date().toISOString(),
  });

  return response.data;
}
