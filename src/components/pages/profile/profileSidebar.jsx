import React from "react";
import { NavLink } from "react-router-dom";

function ProfileSidebar() {
  return (
    <div className="w-full text-white font-gemunu text-xl">
      <ul className="space-y-3 mt-4">
        <li>
          <NavLink
            to="/profile/"
            className="block py-2 px-6 rounded-md hover:bg-cyan-700 transition-colors"
            activeclassname="bg-cyan-700"
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/create"
            className="block py-2 px-6 rounded-md hover:bg-cyan-700 transition-colors"
            activeclassname="bg-cyan-700"
          >
            New Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/blogs"
            className="block py-2 px-6 rounded-md hover:bg-cyan-700 transition-colors"
            activeclassname="bg-cyan-700"
          >
            My Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            exact="true"
            to="/"
            onClick={() => localStorage.removeItem("accessToken")}
            className="block py-2 px-6 rounded-md hover:bg-cyan-700 transition-colors"
            activeclassname="bg-cyan-700"
          >
            Logout
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default ProfileSidebar;
