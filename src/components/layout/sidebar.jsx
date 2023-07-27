import React, { useEffect, useState } from "react";
import MiniBlog from "../pages/miniblog";
import Topics from "../pages/topics";
import {catagories} from '../../base/availableCatagories'
import axios from "axios";
import { baseUrl } from "../../base/baseUrl";

function Sidebar() {
  const [blogs,setBlogs] = useState();

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = () => {
    const url = `${baseUrl}/blogs/`
    axios.get(url)
          .then((res)=>{
            setBlogs(res.data.splice(0,4))
          }).catch(err=>{
            console.log(err);
          })
  }

  return (
    <div className="w-96 bg-gray-100 p-10 flex flex-col items-start justify-start space-y-3 font-gemunu border-l">
      <h3 className="text-2xl font-semibold text-gray-700 my-2">
        Most visited
      </h3>
      {blogs && blogs.map((item, index) => {
        return <MiniBlog key={index} blog={item} />;
      })}
      <h3 className="text-2xl font-semibold text-gray-700 mb-2">
        Recommended topics
      </h3>
      <div className="flex flex-wrap justify-start gap-x-2 gap-y-2">
        {catagories.map((item,index)=>{
          return (
            <Topics topic={item} key={index} />
          )
        })}
      </div>
    </div>
  );
}

export default Sidebar;
