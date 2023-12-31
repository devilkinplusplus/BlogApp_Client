import React,{useEffect,useState} from "react";
import axios from "axios";
import { baseUrl } from "../../../base/baseUrl";
import { useParams } from 'react-router-dom';
import { getBlogById } from "../../../services/axiosServices";

function BlogDetail() {
  const [blog,setBlog] = useState();
  const { id } = useParams();
  useEffect(()=>{
    getBlogById(id).then(res=>{
      setBlog(res.data);
    }).catch(err=>console.log(err))
  },[])

  return (
    <div className="flex justify-start items-start p-4 space-x-4 bg-gray-100">
      <div className="bg-gray-200 flex flex-col space-y-4 p-5 h-auto justify-between items-start w-2/5">
        <img
          src={`${baseUrl}/${blog?.photoUrl}`}
          alt="pp"
          className="object-cover w-auto h-60 rounded-md"
        />
        <h2 className="font-semibold text-2xl px-1.5 text-gray-700">
          <i className="fas fa-user mr-0.5"></i> {blog?.author}
        </h2>
      </div>
      <div className="flex flex-col space-y-4 justify-between items-start font-gemunu w-3/5">
        <h3 className="text-2xl font-semibold text-gray-700 uppercase">
          {blog?.title}
        </h3>
        <span className="flex-grow flex-wrap text-sm text-gray-400 text-justify">
          {blog?.description}
        </span>
        <div className="flex justify-start gap-x-3 items-baseline">
          <span className="text-gray-500">
            {new Date(blog?.createdDate).toLocaleDateString('en-GB')}
          </span>
          <span className="border-l border-l-gray-400 px-3 text-gray-500">
            {blog?.category.toUpperCase()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogDetail;
