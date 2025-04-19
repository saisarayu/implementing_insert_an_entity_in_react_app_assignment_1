// src/Home.jsx

import React from "react";
import BookCard from "./components/BookCard";  //  
import books from "./booksData";              //  exists
import "./Home.css";                          

const Home = () => {
  return (
    <div className="home-container">
      <h1>Book Library</h1>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
