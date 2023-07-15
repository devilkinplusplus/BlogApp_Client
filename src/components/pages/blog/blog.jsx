import React from "react";

function Blog({ blog }) {
  return (
    <div className="flex space-y-2 justify-start space-x-5 m-3 border-b p-5 w-full font-gemunu text-gray-700">
      <img src={blog.image} alt="pp" className="object-cover w-80 h-auto" />
      <div className="flex flex-col justify-between items-start flex-grow">
        <div className="flex space-x-2 justify-start items-baseline">
          <h3 className="text-2xl font-semibold">{blog.title}</h3>
          <span className="text-gray-400">1 hour ago</span>
        </div>

        <div className="flex-grow">
          <p className="text-gray-600">{blog.description}</p>
        </div>

        <div className="flex items-center justify-between gap-x-80">
          <h4 className="font-semibold text-md"><i className="fas fa-user mr-0.5"></i> John Doe</h4>
          <button className="bg-green-400 text-white rounded-md hover:bg-green-300 duration-300 py-1.5 px-3 text-sm" type="button">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
