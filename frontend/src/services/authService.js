import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Cambia el puerto si tu backend usa otro

export async function loginUser(credentials) {
  const response = await axios.post(`${API_URL}/login`, credentials);
  return response.data;
}

export async function registerUser(data) {
  const response = await axios.post(`${API_URL}/register`, data);
  return response.data;
} 