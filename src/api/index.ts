/* eslint-disable */ 
import axios from 'axios';
import { BASE_URL, API_KEY } from '../utils/config';


export const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'X-Api-key': API_KEY,
  },
});