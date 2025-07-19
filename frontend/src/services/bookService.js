import axios from 'axios';

const API_URL = 'http://localhost:5000/api/books'; // Cambia el puerto si tu backend usa otro

export async function getBooks(token) {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function addBook(book, token) {
  const response = await axios.post(API_URL, book, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function updateBook(id, updates, token) {
  const response = await axios.put(`${API_URL}/${id}`, updates, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
}

export async function deleteBook(id, token) {
  const response = await axios.delete(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
} 