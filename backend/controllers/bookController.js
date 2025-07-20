const Book = require('../models/Book');

exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find({ user: req.user.id });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener libros' });
  }
};

exports.addBook = async (req, res) => {
  try {
    const { title, author } = req.body;
    if (!title || !author) {
      return res.status(400).json({ message: 'Título y autor son obligatorios' });
    }
    const book = await Book.create({
      user: req.user.id,
      title,
      author,
      read: false,
    });
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Error al agregar libro' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const book = await Book.findOneAndUpdate(
      { _id: id, user: req.user.id },
      updates,
      { new: true }
    );
    if (!book) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: 'Error al actualizar libro' });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findOneAndDelete({ _id: id, user: req.user.id });
    if (!book) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.json({ message: 'Libro eliminado' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar libro' });
  }
}; 