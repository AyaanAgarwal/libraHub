import React, {useState} from 'react';
import {AiFillEdit, AiOutlineClose} from "react-icons/ai";
import axios from "axios";

const UpdateCard = ({ id, bookname, authorname, rating, price, bookImage, type, onUpdate }) => {
    const [open, setOpen] = useState(false);
    const [updatedValues, setUpdatedValues] = useState({
        id: id,
        bookname: bookname,
        authorname: authorname,
        type: type,
        rating: rating,
        bookImage: bookImage,
        price: price,
    });

    const handleClick = ()=>{
        setOpen(true);
    }
    const handleClose =()=>{
        setOpen(false);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
        console.log(updatedValues);
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`${process.env.REACT_APP_API_URL}/books/edit`, updatedValues);
            console.log('Book update successfully');
            setOpen(false);
            onUpdate();
            // Handle success, e.g., close the update form or fetch updated data
        } catch (error) {
            console.error('Error updating book:', error);
            // Handle error, e.g., show an error message to the user
        }
    };

    return (
        <div className={'flex flex-col gap-4'}>
            <div className={'flex bg-blue-100 p-5 rounded-xl gap-4'}>
                <div>
                    <img src={bookImage} alt={''} className={'w-20 h-32 rounded-xl'} />
                </div>
                <div className={'flex flex-col justify-between flex-1'}>
                    <div className={'text-black text-xl'}>{bookname}<br />({type})</div>
                    <div className={'text-slate-500 text-lg'}>{authorname}</div>
                    <div className={'flex justify-end'}>
                        <button
                            onClick={handleClick}
                            className={'w-min flex items-center gap-2 text-white p-2 rounded-md bg-yellow-500 hover:bg-yellow-500 transition-all duration-300'}
                        >
                            Update <AiFillEdit />
                        </button>
                    </div>
                </div>
            </div>
            {
                open && (
                    <div className={'bg-blue-200 rounded-lg'}>
                        <div className={'text-black flex w-full justify-end'}>
                            <div onClick={handleClose} className={'p-2 hover:bg-black/10 transition-all duration-300 cursor-pointer'}><AiOutlineClose/></div>
                        </div>
                        <h1 className={'font-medium text-center text-black'}>Edit Info For {bookname}!</h1>
                        <form className={'w-full text-black p-4 flex flex-col items-center gap-2'}>
                            <input
                                name="bookname"
                                value={updatedValues.bookname}
                                onChange={handleChange}
                                className={'w-full p-2 rounded-lg bg-blue-300/30 focus:outline-none'}
                                placeholder={'Enter new Book name'}
                            />
                            <input
                                name="authorname"
                                value={updatedValues.authorname}
                                onChange={handleChange}
                                className={'w-full p-2 rounded-lg bg-blue-300/30 focus:outline-none'}
                                placeholder={'Enter new Author name'}
                            />
                            <input
                                name="rating"
                                value={updatedValues.rating}
                                onChange={handleChange}
                                type={'number'}
                                className={'w-full p-2 rounded-lg bg-blue-300/30 focus:outline-none'}
                                placeholder={'Enter new Rating'}
                            />
                            <input
                                name="type"
                                value={updatedValues.type}
                                onChange={handleChange}
                                className={'w-full p-2 rounded-lg bg-blue-300/30 focus:outline-none'}
                                placeholder={'Enter new Genre'}
                            />
                            <input
                                name="bookImage"
                                value={updatedValues.bookImage}
                                onChange={handleChange}
                                className={'w-full p-2 rounded-lg bg-blue-300/30 focus:outline-none'}
                                placeholder={'Enter new Image Link'}
                            />
                            <input
                                name="price"
                                value={updatedValues.price}
                                onChange={handleChange}
                                type={'number'}
                                className={'w-full p-2 rounded-lg bg-blue-300/30 focus:outline-none'}
                                placeholder={'Enter new Amount per day'}
                            />
                            <button onClick={handleUpdate} className={'w-min bg-green-400 hover:bg-green-500 transition-all duration-300 p-2 rounded-lg text-white'}>Confirm</button>
                        </form>
                    </div>
                )
            }
        </div>
    );
};

export default UpdateCard;
