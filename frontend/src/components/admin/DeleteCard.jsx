import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

const DeleteCard = ({ id, bookname, authorname, bookImage, type }) => {
    const handleDelete = async () => {
        try {
            // Make a DELETE request to the server's delete endpoint
            await axios.delete(`${process.env.REACT_APP_API_URL}/books/delete/${id}`);

            // If the request is successful, you can perform additional actions, such as updating the UI
            console.log("Book deleted successfully");
        } catch (error) {
            // Handle errors, e.g., display an error message
            console.error("Error deleting book:", error);
        }
    };

    return (
        <div className={'flex bg-blue-100 p-5 rounded-xl gap-4'}>
            <div>
                <img src={bookImage} alt={''} className={'w-20 h-32 rounded-xl'} />
            </div>
            <div className={'flex flex-col justify-between flex-1'}>
                <div className={'text-black text-xl'}>{bookname}<br />({type})</div>
                <div className={'text-slate-500 text-lg'}>{authorname}</div>
                <div className={'flex justify-end'}>
                    <button
                        onClick={handleDelete}
                        className={'w-min flex items-center gap-2 text-white p-2 rounded-md bg-red-600 hover:bg-red-700 transition-all duration-300'}
                    >
                        Delete <AiFillDelete />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeleteCard;
