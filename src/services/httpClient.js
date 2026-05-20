import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 7000,
  headers: {
    'Content-Type': 'application/json',
  },
});
