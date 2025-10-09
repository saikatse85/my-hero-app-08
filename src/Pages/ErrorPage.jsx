import React from "react";
import errorImg from "../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <img className="mx-auto" src={errorImg} alt="" />
      <h1 className="text-6xl text-black">Oops, page not found!</h1>
      <p className="text-gray-700 py-5">
        The page you are looking for is not available.
      </p>
      <Link
        to="/app"
        className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white"
      >
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
