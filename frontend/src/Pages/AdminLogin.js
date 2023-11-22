import React, { useState, useEffect } from "react";
import ContentViewer from "../components/admin/ContentViewer";
import Header from "../components/admin/Header";
import SideBar from "../components/admin/SideBar";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import AdminLogin from "../assets/AdminLogin.png"
import { useNavigate } from "react-router-dom";

const AdminPage = () => {

    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const changeHandler1=(e)=>{
        setEmail(e.target.value);
    }
    const changeHandler2=(e)=>{
        setPassword(e.target.value);
    }
    const handleSubmit =()=>{

        if(email === "admin123@gmail.com" && password === "admin123")
        {
            navigate("/admin/dashboard");

        }

    }


  return (
    <>
    <div className="bg-slate-100">
      <Header />
      <div className="bg-white pt-[100px] flex items-center justify-center flex-wrap shadow-2xl w-[75%] mx-auto rounded-2xl p-3">
        <div>
            <img src={AdminLogin} alt="..."/>
        </div>
        <div className="flex flex-col">
            <h1 className="text-2xl md:text-xl px-3 font-bold text-blue-500">Admin Login</h1>
            <form onSubmit={handleSubmit} className="flex flex-col">
            <input type="email" placeholder="Admin Email-ID" className="bg-blue-100 text-black border rounded-2xl px-5 py-3 my-3 md:p-3" onChange={changeHandler1} value={email} required/>
            <input type="password" placeholder="Password" className="bg-blue-100 text-black border rounded-2xl px-5 py-3 my-3 md:p-3" onChange={changeHandler2} value={password} required/>
            <button className="bg-blue-400 hover:bg-blue-500 p-3 rounded-2xl my-3 text-white font-bold" type="submit">Login</button>
            </form>
        </div>
      </div>
      </div>


    </>
  );
};

export default AdminPage;
