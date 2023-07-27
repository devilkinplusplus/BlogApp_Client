import React, { useEffect, useState } from "react";
import MiniBlog from "./miniblog";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../base/baseUrl";
import axios from "axios";

function Recommendeds( { fetch } ) {
  const { id } = useParams();
  const [blogs, setBlogs] = useState();
  useEffect(()=>{
    fetch()
  },[id])

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = () => {
    const url = `${baseUrl}/blogs/recommendeds/${id}`
    axios.get(url)
          .then((res)=>{
            setBlogs(res.data)
          }).catch(err=>{
            console.log(err);
          })
  }

  return (
    <div className="p-4 bg-gray-200 font-gemunu">
      <h3 className="text-xl font-semibold text-gray-700 uppercase">Recommended blogs</h3>
      <div className="flex justify-start items-center h-44">
        {blogs ? blogs.map((item, index) => {
          return <MiniBlog key={index} blog={item} />;
        }):
        (<>
          <div>
            No recommendations
          </div>
        </>)}
      </div>
    </div>
  );
}

export default Recommendeds;
