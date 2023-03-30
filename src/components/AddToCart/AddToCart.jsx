import React, { useEffect, useState } from 'react';

const AddToCart = ({readTime}) => {
  const [time, setTime] = useState(readTime)

  useEffect(() =>{
    const getReadTime = localStorage.getItem('read-time');
    setTime(getReadTime);
  },[readTime])
  let sum = 0;
  return (
    <div className='sticky top-3'>
    <div className='mt-5 border-2 border-[#6047EC] bg-violet-100 text-center p-3 rounded-lg font-semibold text-xl text-[#6047EC]'>
      <h1>Spent time on read : <input className='w-[60px]' type="text" value={time} disabled/> min</h1>
    </div>
    <div className='border-t-2 border-slate-200 mt-2 rounded-lg bg-slate-50'>
      <h1 className='text-xl font-semibold p-5'>Bookmarked Blogs : 8</h1>
    </div>
    </div>
  );
};

export default AddToCart;