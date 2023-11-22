import React from "react";
import { Link } from "react-router-dom";
// import bookHolder from "../assets/book-holder.jpg";
import bookHolder from "../assets/Library_Welcome.jpg";

const FrontCard = () => {
  return (
    <div className="flex">
      <div className="w-[50%] h-[100vh] md:hidden ">
        <img
          className="w-[100%] h-[100%] object-fill"
          src={bookHolder}
          alt="book-holder"
        ></img>
      </div>
      <div className="w-[50%] md:w-[100%] h-[100vh] bg-gradient-to-b from-zinc-400 from-10% to-slate-600 to-90% filter flex flex-col justify-center items-center">
        <p className="font-extrabold text-transparent text-3xl mb-3 mx-3 text-center lg:text-3xl md:text-2xl sm:text-2xl xsm:text-2xl bg-clip-text bg-gradient-to-b from-zinc-300 to-white">
        Turning <span className="text-blue-200">Pages</span>, Connecting <span className="text-blue-200">Minds</span>
        </p>
        <p className="font-extrabold text-transparent text-3xl mb-3 mx-3 text-center lg:text-3xl md:text-2xl sm:text-2xl xsm:text-2xl bg-clip-text bg-gradient-to-b from-zinc-300 to-white">
        Your <span className="text-blue-200">Online</span> Haven for Literary <span className="text-blue-200">Delight</span>.
        </p>
        <p className="font-extrabold text-transparent text-4xl mb-3 lg:text-6xl md:text-5xl sm:text-4xl xsm:text-3xl bg-clip-text bg-gradient-to-b from-zinc-300 to-white">
          Libra<span className="text-center text-blue-300">Hub</span>
        </p>
        <div className="flex flex-wrap items-center justify-center">
        <Link to="/books">
          <button className="w-[200px] py-3 mt-7 rounded-sm bg-blue-400 text-white font-bold text-xl rounded-xl shadow-md hover:bg-blue-500 mx-2">
            Get Started
          </button>
        </Link>
        <Link to="/admin/login">
          <button className="w-[200px] py-3 mt-7 rounded-sm bg-blue-400 text-white font-bold text-xl rounded-xl shadow-md hover:bg-blue-500 mx-2">
            Admin Login
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default FrontCard;
