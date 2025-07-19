import React from 'react';

function BookItem({ book, onMarkRead, onDelete }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: 8, padding: 8 }}>
      <h3>{book.title}</h3>
      <p>Autor: {book.author}</p>
      <p>Estado: {book.read ? 'Leído' : 'Por leer'}</p>
      <button onClick={() => onMarkRead(book)} disabled={book.read}>
        Marcar como leído
      </button>
      <button onClick={() => onDelete(book)} style={{ marginLeft: 8 }}>
        Eliminar
      </button>
    </div>
  );
}

export default BookItem; 