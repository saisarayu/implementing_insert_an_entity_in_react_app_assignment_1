// src/components/BookCard.jsx

import React from "react";
import "./BookCard.css"; // Optional

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <img src={book.coverImageUrl} alt={book.title} />
      <h3>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p>{book.description}</p>
    </div>
  );
};

export default BookCard;
