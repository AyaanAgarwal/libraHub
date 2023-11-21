import React, {useEffect, useState} from "react";
import axios from "axios";
import UpdateCard from "./UpdateCard";

const UpdateBook = () => {
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
    });
  }, []);
  return(
      <div className={'flex flex-col gap-4'}>
        {/*<div>{JSON.stringify(data)}</div>*/}
        {
          data?.map((data_single)=>(
              <UpdateCard
                  key={data_single._id}
                  id={data_single._id}
                  bookname={data_single.bookname}
                  authorname={data_single.authorname}
                  rating={data_single.rating}
                  price={data_single.price}
                  bookImage={data_single.bookImage}
                  type={data_single.type}
              />
          ))
        }
      </div>
  );
};

export default UpdateBook;
