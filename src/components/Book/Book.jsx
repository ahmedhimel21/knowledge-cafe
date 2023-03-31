import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'

const Book = (props) => {
  const { cover_img, author_name, author_img, title, read_time,id,publish_in } = props?.book;
  const handleReadTime = props.handleReadTime;
  const handleBookMark = props.handleBookMark;

  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl mt-5 border-t-2 border-slate-200 p-5">
        <figure>
          <img className="w-full h-[450px]"
            src={cover_img}
            alt="bookCoverImage"
          />
        </figure>
        
          <div className="flex justify-between mt-5">
            <div className="flex gap-4">
              <img className="w-[60px] h-[60px] rounded-full" src={author_img} alt="" />
              <div>
              <h1 className="text-xl font-bold">{author_name}</h1>
              <p>{publish_in}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <p>{read_time} min read </p>
              <span className="cursor-pointer	" onClick={() =>handleBookMark(props.book)}><FontAwesomeIcon icon={faBookBookmark} /></span>
            </div>
          </div>
          <h1 className="font-bold text-3xl mt-5 ms-4">{title}</h1>
          <div className="mt-5">
          <button onClick={()=>handleReadTime(read_time)} className="btn btn-link">Mark as read</button>
          </div>
      </div>
    </>
  );
};

export default Book;
