import React, { useEffect, useState } from 'react';

const Books = () => {
  const [books,setBooks] = useState([]);

  useEffect(()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data=> console.log(data))
  },[])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-5'>
      <div className='border border-purple-500 col-span-3'>
        <h1>hello</h1>
      </div>
      <div className='border border-rose-500 col-span-1'>
        <h1>I am file and you!!!</h1>
      </div>
    </div>
  );
};

export default Books;