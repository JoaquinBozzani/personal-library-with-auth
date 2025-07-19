import React, { useState } from 'react';

function AddBookForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    onAdd({ title, author });
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
        style={{ marginLeft: 8 }}
      />
      <button type="submit" style={{ marginLeft: 8 }}>Agregar libro</button>
    </form>
  );
}

export default AddBookForm; 