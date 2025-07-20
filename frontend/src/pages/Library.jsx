import React, { useState, useEffect } from 'react';
import BookItem from '../components/BookItem';
import AddBookForm from '../components/AddBookForm';
import { getBooks, addBook, updateBook, deleteBook } from '../services/bookService';
import { useAuth } from '../context/AuthContext';

function Library() {
  const { token } = useAuth();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch books from backend
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError('');
      try {
        const data = await getBooks(token);
        setBooks(data);
      } catch (err) {
        setError('Error loading books');
      } finally {
        setLoading(false);
      }
    };
    if (token) fetchBooks();
  }, [token]);

  const handleMarkRead = async (book) => {
    try {
      const updated = await updateBook(book._id, { read: true }, token);
      setBooks(books.map(b => b._id === book._id ? updated : b));
    } catch (err) {
      setError('Error marking book as read');
    }
  };

  const handleMarkUnread = async (book) => {
    try {
      const updated = await updateBook(book._id, { read: false }, token);
      setBooks(books.map(b => b._id === book._id ? updated : b));
    } catch (err) {
      setError('Error marking book as unread');
    }
  };

  const handleDelete = async (book) => {
    try {
      await deleteBook(book._id, token);
      setBooks(books.filter(b => b._id !== book._id));
    } catch (err) {
      setError('Error deleting book');
    }
  };

  const handleAddBook = async (newBook) => {
    try {
      const created = await addBook(newBook, token);
      setBooks([...books, created]);
    } catch (err) {
      setError('Error adding book');
    }
  };

  const readBooks = books.filter(b => b.read);
  const unreadBooks = books.filter(b => !b.read);

  return (
    <div>
      <AddBookForm onAdd={handleAddBook} />
      {loading && <p>Loading books...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h2>Books to read</h2>
      {unreadBooks.length === 0 ? <p>No books to read.</p> :
        unreadBooks.map(book => (
          <BookItem key={book._id} book={book} onMarkRead={handleMarkRead} onMarkUnread={handleMarkUnread} onDelete={handleDelete} />
        ))}

      <h2>Read books</h2>
      {readBooks.length === 0 ? <p>No read books.</p> :
        readBooks.map(book => (
          <BookItem key={book._id} book={book} onMarkRead={handleMarkRead} onMarkUnread={handleMarkUnread} onDelete={handleDelete} />
        ))}
    </div>
  );
}

export default Library; 