import React from "react";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router";

const AppsCard = ({ app }) => {
  const { title, image, downloads, ratingAvg, id } = app;

  return (
    <div>
      <Link to={`/app/${id}`}>
        <div className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out">
          <figure>
            <img className="rounded-lg mt-2" src={image} alt="App" />
          </figure>
          <div className="card-body">
            <div className="card-title">{title}</div>

            <div className="card-actions justify-between">
              <div className="badge bg-green-100 text-green-700 ">
                <MdOutlineFileDownload />
                {downloads}
              </div>
              <div className="badge bg-orange-100 text-orange-700 ">
                <FaRegStar />
                {ratingAvg}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AppsCard;
