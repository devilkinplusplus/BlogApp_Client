import React from "react";
import Blog from "./blog";
import blogs from "../../../model/blogs.json";

function BlogList() {
  return (
    <>
      <div className="flex flex-wrap flex-1 p-4 justify-evenly bg-gray-100">
        {blogs.map((item, index) => {
          return <Blog key={index} blog={item} />;
        })}
      </div>
    </>
  );
}

export default BlogList;
