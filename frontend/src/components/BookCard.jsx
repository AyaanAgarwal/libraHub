import React from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import star from "../assets/star-dynamic-premium.png";
import { BsStarFill } from "react-icons/bs";

const BookCard = ({ data, clear, delFav }) => {
  const navigate = useNavigate();
  const handleBook = () => {
    navigate(`/book/${data?._id}`);
  };

  const handleDelFav = () => {
    delFav(data);
  };

  return (
    <div className="mx-3 md:mx-1 sm:ml-4 mt-5 border p-4 rounded-xl shadow-2xl bg-white">
      <div
        onClick={handleBook}
        className="w-[200px] sm:w-[150px] h-[300px] sm:h-[200px] "
      >
        <img
          className="w-[100%] h-[100%] object-cover rounded-sm"
          src={data?.bookImage}
          alt="solo-book"
        ></img>
      </div>
      <div className="flex justify-between items-center pr-2">
        <div className="flex justify-around items-center bg-blue-200 w-max px-2 mt-1.5 ml-[1px] rounded-sm">
          {/* <img className="w-6 rotate-6 -ml-1" src={star} alt="star"></img> */}
          <BsStarFill className="text-yellow-300"/>
          <p className="ml-1 font-bold text-slate-800">{data?.rating}</p>
        </div>
        {clear && (
          <div
            onClick={handleDelFav}
            className="text-xl text-red-600 cursor-pointer"
          >
            {<MdDelete />}
          </div>
        )}
      </div>
      <p className="mt-1 sm:font-semibold text-black text-lg sm:text-sm">
        {data?.bookname.slice(0, 17)}...
      </p>
      <p className="text-slate-500 text-sm">{data?.authorname}</p>
      <p className="text-blue-500 font-semibold mt-1">$ {data?.price}/day</p>
    </div>
  );
};

export default BookCard;
