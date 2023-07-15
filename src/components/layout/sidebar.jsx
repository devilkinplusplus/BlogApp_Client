import React from "react";
import MiniBlog from "../pages/miniblog";
import Topics from "../pages/topics";
import blogs from "../../model/blogs.json";

function Sidebar() {
  return (
    <div className="w-96 bg-gray-100 p-10 flex flex-col items-start justify-start space-y-3 font-gemunu border-l">
      <h3 className="text-2xl font-semibold text-gray-700 my-2">
        Most visited
      </h3>
      {blogs.map((item, index) => {
        return <MiniBlog key={index} blog={item} />;
      })}
      <h3 className="text-2xl font-semibold text-gray-700 mb-2">
        Recommended topics
      </h3>
      <div className="flex flex-wrap justify-start gap-x-2 gap-y-2">
        <Topics topic="Sports" />
        <Topics topic="Programming" />
        <Topics topic="Self improvement" />
        <Topics topic="Politics" />
        <Topics topic="Writing" />
      </div>
    </div>
  );
}

export default Sidebar;
