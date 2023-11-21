import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteCard from "./DeleteCard";
import {logout} from "../../action";

const DeleteBook = () => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/books`);
            setData(res.data);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    useEffect(() => {
        fetchData().then(r => {
            console.log(JSON.stringify(data))
        }); // You don't need to use .then here, useEffect can handle async functions directly

        // Since fetchData is asynchronous, data will not be immediately available here
        // If you want to see the data, you should log it inside the fetchData function
    }, []);

    // The data is still being fetched, so it might be null at this point
    // If you want to render something based on the data, you can conditionally render it
    return (
        <div className={'flex flex-col gap-4'}>
            {/*<div>{JSON.stringify(data)}</div>*/}
            {
                data?.map((data_single)=>(
                    <DeleteCard
                        key={data_single._id}
                        id={data_single._id}
                        bookname={data_single.bookname}
                        authorname={data_single.authorname}
                        bookImage={data_single.bookImage}
                        type={data_single.type}
                    />
                ))
            }
        </div>
    );
};

export default DeleteBook;
