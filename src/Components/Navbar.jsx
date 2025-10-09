import React from "react";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar screen-w">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/app">Apps</Link>
              </li>
              <li>
                <Link to="/installation">Installation</Link>
              </li>
            </ul>
          </div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex gap-1 items-center text-xl font-semibold transition ${
                isActive
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
                  : "text-gray-800 hover:text-[#632EE3]"
              }`
            }
          >
            <img className="w-8 h-8" src={logo} alt="logo" />
            HERO.IO
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 font-semibold border-b-2 border-purple-600"
                    : "text-gray-700 hover:text-purple-600"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/app"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 font-semibold border-b-2 border-purple-600"
                    : "text-gray-700 hover:text-purple-600"
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 font-semibold border-b-2 border-purple-600"
                    : "text-gray-700 hover:text-purple-600"
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="https://github.com/saikatse85/my-hero-app-08"
            className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white"
          >
            <FaGithub />
            Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
