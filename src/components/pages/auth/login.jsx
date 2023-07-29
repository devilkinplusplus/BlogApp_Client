import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginUser } from "../../../services/axiosServices";
import { useNavigate } from "react-router-dom";
import ToastService from "../../../services/tostify";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data).then((res) => {
      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.accessToken);
        navigate("/");
      }else{
        for (const error of res.data) {
          ToastService.error(error)
        }
      }
    }).catch(err=>{
        console.log(err);
    });
  };

  return (
    <div className="container flex flex-col mx-auto mt-10 justify-start items-center h-80 w-128 p-10 bg-gray-50 font-gemunu">
      <h2 className="text-cyan-600 text-3xl font-semibold uppercase">
        Welcome to Your Digital Oasis
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-start items-start w-96 my-2">
          <label
            htmlFor="userName"
            className="block text-gray-400 font-medium mb-1"
          >
            Username
          </label>
          <input
            type="text"
            id="userName"
            placeholder="Enter your username"
            autoComplete="off"
            required
            {...register("userName", {
              required: "Username is required",
            })}
            className="border-2 text-gray-500 outline-none border-gray-300 rounded px-3 py-2 w-full focus:border-cyan-500 duration-300"
          />
        </div>
        <div className="flex flex-col justify-start items-start w-96 my-2">
          <label
            htmlFor="password"
            className="block text-gray-400 font-medium mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            autoComplete="off"
            required
            {...register("password", {
              required: "Password is required",
            })}
            className="border-2 text-gray-500 outline-none border-gray-300 rounded px-3 py-2 w-full focus:border-cyan-500 duration-300"
          />
        </div>
        <div className="flex justify-between items-center my-3">
          <Link
            to="/register"
            className="text-cyan-700 hover:underline duration-300"
          >
            Don't have an account?
          </Link>
        </div>
        <button
          className="bg-cyan-600 py-2 px-14 w-full rounded-sm text-white hover:bg-cyan-500 duration-300"
          type="submit"
        >
          Go in
        </button>
      </form>
    </div>
  );
}

export default Login;
