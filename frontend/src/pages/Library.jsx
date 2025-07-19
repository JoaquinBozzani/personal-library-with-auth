import React, { useState } from 'react';
import BookItem from '../components/BookItem';
import AddBookForm from '../components/AddBookForm';

const mockBooks = [
  { id: 1, title: 'Cien años de soledad', author: 'Gabriel García Márquez', read: true },
  { id: 2, title: 'El principito', author: 'Antoine de Saint-Exupéry', read: false },
  { id: 3, title: '1984', author: 'George Orwell', read: false },
  { id: 4, title: 'Rayuela', author: 'Julio Cortázar', read: true },
];

function Library() {
  const [books, setBooks] = useState(mockBooks);

  const handleMarkRead = (book) => {
    setBooks(books.map(b => b.id === book.id ? { ...b, read: true } : b));
  };

  const handleDelete = (book) => {
    setBooks(books.filter(b => b.id !== book.id));
  };

  const handleAddBook = (newBook) => {
    const nextId = books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;
    setBooks([...books, { ...newBook, id: nextId, read: false }]);
  };

  const readBooks = books.filter(b => b.read);
  const unreadBooks = books.filter(b => !b.read);

  return (
    <div>
      <AddBookForm onAdd={handleAddBook} />
      <h2>Libros por leer</h2>
      {unreadBooks.length === 0 ? <p>No hay libros por leer.</p> :
        unreadBooks.map(book => (
          <BookItem key={book.id} book={book} onMarkRead={handleMarkRead} onDelete={handleDelete} />
        ))}

      <h2>Libros leídos</h2>
      {readBooks.length === 0 ? <p>No hay libros leídos.</p> :
        readBooks.map(book => (
          <BookItem key={book.id} book={book} onMarkRead={handleMarkRead} onDelete={handleDelete} />
        ))}
    </div>
  );
}

export default Library; 