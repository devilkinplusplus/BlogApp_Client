import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import 'alertifyjs/build/css/alertify.min.css';
import { deleteBlog, getMyBlogs } from "../../../services/axiosServices";
import { showSuccess , confirmAlert } from "../../../services/alertifyService";
import ToastService from "../../../services/tostify";

function MyBlogs() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    getMyBlogs()
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    confirmAlert("Confirm request","Are you sure to delete ?",()=>{
      deleteBlog(id)
          .then((res) => {
            ToastService.success("Deleted permanently ✅")
          })
          .catch((err) => {
            console.log(err);
          });
    },()=>{})
  };

  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Title
          </th>
          <th className="px-6 py-3 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Date
          </th>
          <th className="px-6 py-3 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Remove
          </th>
          <th className="px-6 py-3 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            Update
          </th>
        </tr>
      </thead>
      <tbody>
        {blogs && blogs.map((item, index) => {
          return (
            <tr key={index}>
              <td
                onClick={() => navigate(`/profile/${item.id}`)}
                className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center cursor-pointer"
              >
                {item.title}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-center">
                <span className="bg-red-500 py-1.5 px-6 text-white rounded-lg cursor-pointer hover:bg-red-400 duration-300">
                  {new Date(item.createdDate).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-gray-600 border-b border-gray-200 text-center">
                <i
                  className="fas fa-trash cursor-pointer"
                  onClick={() => handleDelete(item.id)}
                ></i>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b text-yellow-600 border-gray-200 text-center">
                <i className="fas fa-pen cursor-pointer"></i>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default MyBlogs;
