import React from 'react';
import './BookItem.css';

function BookItem({ book, onMarkRead, onMarkUnread, onDelete }) {
  return (
    <div className="book-item">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Status: {book.read ? 'Read' : 'To read'}</p>
      {!book.read && (
        <button onClick={() => onMarkRead(book)}>
          Mark as read
        </button>
      )}
      {book.read && (
        <button onClick={() => onMarkUnread(book)}>
          Mark as unread
        </button>
      )}
      <button onClick={() => onDelete(book)}>
        Delete
      </button>
    </div>
  );
}

export default BookItem; 