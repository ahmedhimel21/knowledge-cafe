import React from "react";

const Book = (props) => {
  console.log(props.book);
  const { cover_img, author_name, author_img, title, read_time } = props.book;
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl mt-5 border-t-2 border-slate-200 p-5">
        <figure>
          <img className="w-full h-[450px]"
            src={cover_img}
            alt="bookCoverImage"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
