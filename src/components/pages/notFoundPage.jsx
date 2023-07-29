import React from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col py-20 justify-center items-center font-gemunu">
      <h1 className="text-teal-700 text-8xl font-semibold tracking-wider">
        404
      </h1>
      <h3 className="text-4xl py-2 text-teal-600 tracking-wider">
        Page is not found!
      </h3>
      <button
        className="py-3 px-10 bg-teal-300 text-teal-700 tracking-wider font-semibold rounded-md hover:bg-white duration-300"
        onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
}

export default NotFoundPage;
