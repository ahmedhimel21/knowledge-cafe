import React, { useEffect, useState } from "react";
import AddToCart from "../AddToCart/AddToCart";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="col-span-3">
        {books.map((book) => (
          <Book book={book} key={book.id}></Book>
        ))}
      </div>
      <div className="">
        <AddToCart></AddToCart>
      </div>
    </div>
  );
};

export default Books;
