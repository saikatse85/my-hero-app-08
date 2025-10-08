import React from "react";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

const AppsCard = ({ app }) => {
  const { title, image, downloads, ratingAvg } = app;

  return (
    <div>
      <div className="card bg-base-100 shadow-sm hover:scale-105 transition ease-in-out">
        <figure>
          <img src={image} alt="Shoes" />
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
    </div>
  );
};

export default AppsCard;
