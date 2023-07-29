import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createUser } from "../../../services/axiosServices";
import ToastService from "../../../services/tostify";

function Register() {
  const navigate = useNavigate();  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data)
      .then((res) => {
        if(res.status === 200){
          navigate("/login")
          ToastService.success("Congrats, you have account now 🥳")
        }
       })
      .catch((err) => {
        for (const error of err.response.data) {
          ToastService.error(error)
        }
      });
  };

  return (
    <div className="container flex flex-col mx-auto justify-start items-center h-128 w-128 p-5 bg-gray-50 font-gemunu">
      <h2 className="text-cyan-600 text-3xl font-semibold uppercase">
        Seamless sign-up, limitless potential
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-start items-start w-96 my-2">
          <label
            htmlFor="name"
            className="block text-gray-400 font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            autoComplete="off"
            {...register("firstName", {
              required: "Firstname is required",
            })}
            className={`border-2 text-gray-500 outline-none rounded px-3 py-2 w-full focus:border-cyan-500 duration-300 ${
              errors.firstName ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>
        <div className="flex flex-col justify-start items-start w-96 my-2">
          <label
            htmlFor="lastName"
            className="block text-gray-400 font-medium mb-1"
          >
            Lastname
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your lastname"
            autoComplete="off"
            {...register("lastName", {
              required: "Lastname is required",
            })}
            className={`border-2 text-gray-500 outline-none rounded px-3 py-2 w-full focus:border-cyan-500 duration-300 ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>
        <div className="flex flex-col justify-start items-start w-96 my-2">
          <label
            htmlFor="userName"
            className="block text-gray-400 font-medium mb-1">
            Username
          </label>
          <input
            type="text"
            id="userName"
            placeholder="Enter your username"
            autoComplete="off"
            {...register("userName", {
              required: "Username is required",
            })}
            className={`border-2 text-gray-500 outline-none rounded px-3 py-2 w-full focus:border-cyan-500 duration-300 ${
              errors.userName ? "border-red-500" : "border-gray-300"
            }`}
          />
        </div>
        <div className="flex flex-col justify-start items-start w-96 my-2">
          <label
            htmlFor="email"
            className="block text-gray-400 font-medium mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            autoComplete="off"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className={`border-2 text-gray-500 outline-none rounded px-3 py-2 w-full focus:border-cyan-500 duration-300 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email?.message === "Invalid email address" && 
          <p className='bg-red-200 mt-1 text-red-500 px-32 py-0.5 rounded-md'>{errors.email.message}</p>}

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
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            className={`border-2 text-gray-500 outline-none rounded px-3 py-2 w-full focus:border-cyan-500 duration-300 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.password?.message === "Password must be at least 6 characters" && 
          <p className='bg-red-200 mt-1 text-red-500 px-20 py-0.5 rounded-md'>{errors.password.message}</p>}
        </div>
        <div className="flex justify-between items-center my-3">
          <Link
            to="/login"
            className="text-cyan-700 hover:underline duration-300"
          >
            Already have an account?
          </Link>
        </div>
        <button
          className="bg-cyan-600 py-1.5 px-14 w-full rounded-sm text-xl text-white hover:bg-cyan-500 duration-300"
          type="submit"
        >
          Let's goo!
        </button>
      </form>
    </div>
  );
}

export default Register;
