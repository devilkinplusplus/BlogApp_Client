import React from "react";
import { NavLink,useNavigate } from "react-router-dom";
import "../../styles/layout/_header.css";

function Header() {
  const navigate = useNavigate()

  return (
    <header className="bg-gradient-to-r from-teal-500 via-teal-600 to-cyan-500 py-4 font-gemunu sticky top-0">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="text-white tracking-wider">
          <span className="text-4xl font-bold cursor-pointer" onClick={()=>navigate("/")}>BlogOn</span>
        </div>
        <ul className="flex space-x-4 text-xl">
          <li>
            <NavLink
              to="/"
              className="text-white hover:text-cyan-200 transition duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className="text-white hover:text-cyan-200 transition duration-300"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className="text-white hover:text-cyan-200 transition duration-300"
            >
              Sign up
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className="text-white hover:text-cyan-200 transition duration-300"
            >
              Sign in
            </NavLink>
          </li>
        
 
        </ul>
      </nav>
    </header>
  );
}

export default Header;
