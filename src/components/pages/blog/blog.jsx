import React from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../../base/baseUrl";
import { timeFormat } from "../../../base/timeFormat";

function Blog({ blog }) {
  const navigate = useNavigate();
  return (
    <div className="flex space-y-2 justify-start space-x-5 m-3 border-b p-5 w-full font-gemunu text-gray-700">
      <img src={`${baseUrl}/${blog.photoUrl}`} alt="pp" className="object-cover w-80 h-auto rounded-md" />
      <div className="flex flex-col justify-between items-start flex-grow">
        <div className="flex space-x-2 justify-start items-baseline">
          <h3 className="text-2xl font-semibold">{blog.title}</h3>
          <span className="text-gray-400">{timeFormat(blog.createdDate)}</span>
        </div>

        <div className="flex-grow">
          <p className="text-gray-600">{
              blog.description.length > 350
                ? blog.description.substring(0, blog.description.substring(0, 350).lastIndexOf(' ')) + '...'
                : blog.description + '...'
          }</p>
        </div>

        <div className="flex items-center justify-between gap-x-80">
          <h4 className="font-semibold text-md"><i className="fas fa-user mr-0.5"></i> {blog.author}</h4>
          <button onClick={()=> navigate(`/blog/${blog.id}`)} className="bg-green-400 text-white rounded-md hover:bg-green-300 duration-300 py-1.5 px-3 text-sm" type="button">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
