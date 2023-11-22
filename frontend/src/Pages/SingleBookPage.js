import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { BsStarFill } from "react-icons/bs";
import MobileNav from "../components/MobileNav";
import bookImage from "../assets/notebook-dynamic-clay.png";
import star from "../assets/star-dynamic-premium.png";
import CardTemplate from "../components/CardTemplate";
import { useSelector, useDispatch } from "react-redux";
import { open } from "../action";

const SingleBookPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.slice(6);
  const [bookData, setBookData] = useState();
  const [related, setRelated] = useState();
  const userStatus = useSelector((state) => state.user);
  const toggler = useSelector((state) => state.toggler);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    const getBook = async () => {
      try {
        const book = await axios.get(
          `${process.env.REACT_APP_API_URL}/books/${bookId}`
        );
        setBookData(book);
      } catch (err) {
        console.log(err);
      }
    };
    getBook();
  }, [location]);

  useEffect(() => {
    const getSameCategoryBooks = async () => {
      try {
        const sameBooks = await axios.get(
          `${process.env.REACT_APP_API_URL}/books/all/${bookData?.data?.type}`
        );
        setRelated(sameBooks);
      } catch (err) {
        console.log(err);
      }
    };
    getSameCategoryBooks();
  }, [bookData]);

  const handleRelated = (val) => {
    navigate(`/book/${val._id}`);
  };

  const handleRequest = (val) => {
    if (userStatus?.user !== null) {
      navigate(`/book/request/${val._id}`);
    } else {
      dispatch(open());
    }
  };

  return (
    <>
      <Header />
        
        <div className="flex flex-col justify-center items-center w-[100%] bg-slate-100 mt-20">
          <div className="p-10 shadow-2xl rounded-md ">
            <div className="flex items-center justify-center">
              <img src={bookData?.data?.bookImage} alt="solo-book" />
            </div>
            <div>
              <div className="flex justify-around items-center bg-blue-200 w-max px-2 mt-4 rounded-sm ">
                <BsStarFill className="text-yellow-300"/>
                <p className="ml-1 font-bold text-slate-800">
                  {bookData?.data?.rating}
                </p>
              </div>
              <p className="text-black text-3xl sm:text-xl">
                {bookData?.data?.bookname.slice(0, 30)}...
              </p>
              <p className="text-slate-500 mt-2 font-semibold text-xl">
                Author : {bookData?.data?.authorname}
              </p>
              <button
                onClick={() => handleRequest(bookData?.data)}
                className="mt-3 bg-blue-400 hover:bg-blue-500 p-3 rounded-lg text-white capitalize font-bold shadow-lg"
              >
                Rent @ ₹{bookData?.data?.price}/day
              </button>
            </div>
          </div>

          {/* --------------------------------------------------------------------------------------------- */}

          <p className="mt-10 pt-10 text-5xl md:text-4xl sm:text-2xl font-bold text-blue-500 ">
            Related Books
          </p>
          <div className="flex flex-wrap justify-center sm:justify-around sm:px-3 items-center pr-20 xsm:pr-5 cursor-pointer">
            {related ? (
              related?.data?.map((data, idx) => {
                return (
                  <div
                    key={idx}
                    className="mx-3 md:mx-1 mt-5 p-5 shadow-2xl rounded-2xl"
                    onClick={() => handleRelated(data)}
                  >
                    <div className="w-[200px] sm:w-[150px] h-[300px] sm:h-[200px]">
                      <img
                        className="w-[100%] h-[100%] object-cover rounded-sm"
                        src={data?.bookImage}
                      ></img>
                    </div>
                    <div className="flex justify-between items-center pr-2">
                      <div className="flex justify-around items-center bg-blue-200 w-max px-2 mt-1.5 ml-[1px] rounded-sm">
                        <BsStarFill className="text-yellow-500"/>
                        <p className="ml-1 font-bold text-slate-800">
                          {data?.rating}
                        </p>
                      </div>
                    </div>
                    <p className="mt-1 sm:font-semibold text-black text-lg sm:text-sm">
                      {data?.bookname.slice(0, 17)}...
                    </p>
                    <p className="text-slate-500 text-sm">{data?.authorname}</p>
                    <p className="text-blue-500 font-semibold mt-1">
                      $ {data?.price}/day
                    </p>
                  </div>
                );
              })
            ) : (
              <CardTemplate origin={"related"} />
            )}
          </div>
        </div>
      <MobileNav />
    </>
  );
};

export default SingleBookPage;
