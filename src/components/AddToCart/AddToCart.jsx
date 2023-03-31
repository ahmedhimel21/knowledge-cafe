import React, { useEffect, useState } from "react";

const AddToCart = (props) => {
  const readTime = props.readTime;
  const [time, setTime] = useState(readTime);

  useEffect(() => {
    const getReadTime = localStorage.getItem("read-time");
    setTime(getReadTime);
  }, [readTime]);

  return (
    <div className="sticky top-3 ">
      <div className="mt-5 border-2 border-[#6047EC] bg-violet-100 text-center p-3 rounded-lg font-semibold text-xl text-[#6047EC]">
        <h1>
          Spent time on read :
          <input
            className="w-[60px] ms-3"
            type="text"
            value={time}
            disabled
            placeholder="0"
          />
          min
        </h1>
      </div>
      <div className="border-t-2 border-slate-200 mt-2 rounded-lg bg-slate-50">
        <h1 className="text-xl font-bold p-5">
          Bookmarked Blogs : {props.cart.length}
        </h1>
        <div>
          {props.cart.map((singleCart) => (
            <p className="text-xl font-semibold shadow-lg mt-5 p-3 border-t-2 border-slate-200">
              {singleCart.title}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
