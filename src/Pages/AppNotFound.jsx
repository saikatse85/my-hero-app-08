import React from "react";
import appNotFound from "../assets/App-Error.png";
import { Link } from "react-router";

const AppNotFound = () => {
  return (
    <div>
      <img className="mx-auto" src={appNotFound} alt="" />
      <h1 className="text-6xl text-black">Oops, App not found!</h1>
      <p className="text-gray-700 py-5">
        The App you are requesting is not found on our system. please try
        another apps
      </p>
      <Link
        to="/"
        className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white"
      >
        Go Home
      </Link>
    </div>
  );
};

export default AppNotFound;
