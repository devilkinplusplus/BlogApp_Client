import React from "react";
import MiniBlog from "./miniblog";
import blogs from "../../model/blogs.json";

function Recommendeds() {
  return (
    <div className="p-4 bg-gray-200 font-gemunu">
      <h3 className="text-xl font-semibold text-gray-700 uppercase">Recommended blogs</h3>
      <div className="flex justify-start items-center h-44">
        {blogs.map((item, index) => {
          return <MiniBlog key={index} blog={item} />;
        })}
      </div>
    </div>
  );
}

export default Recommendeds;
