import React, { useEffect, useState } from "react";
import AddToCart from "../AddToCart/AddToCart";
import Book from "../Book/Book";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [readTime,setReadTime] = useState(0);
  const [title,setTitle] = useState([]);

  const handleReadTime = (time) =>{
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

  const handleBookMark = (bookTitle) =>{
    const newCart = title.find((tl) => tl.id === bookTitle.id);
    if(newCart){
      alert('already exist')
      setTitle([...title,bookTitle]);
    }
    else{
      setTitle([...title,bookTitle]);
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
          <Book 
          book={book} key={book.id} 
          books={books}
          handleReadTime={handleReadTime}
          handleBookMark={handleBookMark}
          >
          </Book>
        ))}
      </div>
      <div>
        <AddToCart 
        readTime={readTime}
        title={title}
        >
        </AddToCart>
      </div>
    </div>
  );
};

export default Books;
