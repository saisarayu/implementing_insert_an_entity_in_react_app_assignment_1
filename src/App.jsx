import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBook from "./components/AddBook";
import Home from "./Home";
import "./App.css";

const App = () => {
  return (
    <Router> {/* Wrap everything inside Router */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </Router>
  );
};

export default App;
