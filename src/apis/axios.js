import axios from 'axios';
import { BASE_URL } from '../config/config';

const token = localStorage.getItem('token');

export const todoClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
