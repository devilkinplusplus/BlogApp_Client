import React, { useState, useEffect } from "react";
import { catagories } from "../../../base/availableCatagories";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../../../services/axiosServices";
import ToastService from "../../../services/tostify";
import axios from "../../../services/axiosServices";

function BlogCreate() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedCategories(catagories);
  }, [catagories]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("accessToken");
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("photoUrl", data.photoUrl[0]);

      const response = await createBlog(formData);
      if (response.status) {
        navigate("/profile/blogs");
        ToastService.success("Successfully created");
      }
    } catch (error) {
        ToastService.error("Something went wrong");
    }
  };

  return (
    <div className="flex flex-col justify-start space-y-4 p-4 h-auto bg-gray-200 font-gemunu">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl tracking-wider text-gray-700">
          Write New Blog
        </h2>
      </div>
      <form
        encType="multipart/form-data"
        className="space-y-2 text-gray-700"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col justify-start items-start space-y-1 px-10 text-xl">
          <label htmlFor="title" className="text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Blog title"
            {...register("title", {
              required: "Title is required",
            })}
            className={`w-full border-2 outline-none py-1.5 px-3 rounded-sm focus:border-blue-400 duration-300 text-gray-600
              ${errors.title ? "border-red-400" : "border-gray-300"}
            `}
          />
        </div>
        <div className="flex flex-col justify-start items-start space-y-1 px-10 text-xl">
          <label htmlFor="catagory" className="text-gray-600">
            Category
          </label>
          <select
            {...register("category", { required: "Select any category" })}
            id="category"
            className={`w-full outline-none border-2 py-1.5 px-3 rounded-sm focus:border-blue-400 duration-300 text-gray-600
              ${errors.category ? "border-red-400" : "border-gray-300"}     
            `}
          >
            <option value="">Choose any catagory</option>
            {selectedCategories.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col justify-start items-start space-y-1 px-10 text-xl py-2">
          <label className="text-gray-600">Select Photo</label>
          <label
            htmlFor="file"
            className={`w-full h-10 bg-white border-2 border-gray-300 rounded-sm flex flex-col justify-center items-center cursor-pointer
              ${errors.photoUrl ? "border-red-400" : "border-gray-300"}
            `}
          >
            <span className="text-gray-600">Choose a photo</span>
          </label>
          <input
            type="file"
            id="file"
            className="hidden"
            {...register("photoUrl", {
              required: "Image is required",
            })}
          />
        </div>
        <div className="flex flex-col justify-start items-start space-y-1 px-10 text-xl">
          <label htmlFor="content" className="text-gray-600">
            Content
          </label>
          <textarea
            id="content"
            placeholder="Blog content"
            {...register("description", {
              required: "Content is required",
            })}
            className={`w-full border-2 outline-none py-2 px-3 rounded-sm focus:border-blue-400 duration-300 text-gray-600 resize-none
                ${errors.description ? "border-red-400" : "border-gray-300"}
              `}
            rows="5"
          ></textarea>
        </div>
        <div className="flex flex-col justify-start items-center space-y-4 px-10 text-xl py-2">
          <button
            type="submit"
            className="py-3 px-20 w-full bg-blue-400 rounded-sm text-white tracking-wider hover:bg-blue-300 duration-300"
          >
            Push
          </button>
        </div>
      </form>
    </div>
  );
}

export default BlogCreate;
