import React from "react";
import Blog from "./blog";
import blogs from "../../../model/blogs.json";
import '../../../styles/pages/_blogList.css'

function BlogList() {
  return (
    <>
      <div className="flex flex-wrap flex-1 p-4 justify-start bg-gray-100 pt-16">
        <div className="flex justify-start items-center mx-9 text-start space-x-5 text-lg text-cyan-900 font-gemunu uppercase border-b-2">
            <span className="active-header">For you</span>
            <span>Software</span>
            <span>Sport</span>
            <span>Islam</span>
            <span>Food</span>
            <span>Music</span>
        </div>
        {blogs.map((item, index) => {
          return <Blog key={index} blog={item} />;
        })}
      </div>
    </>
  );
}

export default BlogList;
