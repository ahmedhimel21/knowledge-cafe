import React, { useEffect, useState } from "react";
import AddToCart from "../AddToCart/AddToCart";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [readTime,setReadTime] = useState('');

  const handReadTime = (time) =>{
    const previousReadTime = JSON.parse(localStorage.getItem('read-time'));
    if(previousReadTime){
      const sum = previousReadTime + time;
      localStorage.setItem('read-time',sum);
      setReadTime(sum);
    }
    else{
      localStorage.setItem('read-time',time);
      setReadTime(time);
    }
  }

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <div className="col-span-3">
        {books?.map((book) => (
          <Book book={book} key={book.id} handReadTime={handReadTime}></Book>
        ))}
      </div>
      <div className="">
        <AddToCart readTime={readTime}></AddToCart>
      </div>
    </div>
  );
};

export default Books;
