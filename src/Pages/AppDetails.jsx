import React, { useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import download from "/download.png";
import star from "/star.png";
import like from "/like.png";
import { ToastContainer, toast } from "react-toastify";
import RatingChart from "../Components/RatingChart";
import ErrorPage from "./ErrorPage";
import SkeletonLoader from "../Components/SkeletonLoader";

const AppDetails = () => {
  const { apps, loading } = useApps();
  const { id } = useParams();
  const [installed, setInstalled] = useState(false);
  if (loading) {
    return <SkeletonLoader />;
  }
  const app = apps.find((ap) => ap.id === parseInt(id));
  if (!app) {
    return (
      <p className="text-center text-red-500 py-10 font-semibold">
        <ErrorPage />
      </p>
    );
  }
  const { title, image, description, size } = app || {};
  const handleInstalled = () => {
    const existingInstalled = JSON.parse(localStorage.getItem("installed"));
    setInstalled(true);
    toast(`✅${title} Installed successfully`, {
      position: "top-center",
    });
    let updateInstalled = [];
    if (existingInstalled) {
      const isDuplicate = existingInstalled.some((a) => a.id === app.id);
      if (isDuplicate)
        return toast.info("Already Installed", {
          position: "top-center",
        });
      updateInstalled = [...existingInstalled, app];
    } else {
      updateInstalled.push(app);
    }
    localStorage.setItem("installed", JSON.stringify(updateInstalled));
  };

  return (
    <div className="bg-[#f1f5e8] py-5">
      <div className="screen-w">
        <div className="flex py-5">
          <div className="w-1/4">
            <img src={image} alt="Shoes" />
          </div>
          <div className=" w-3/4">
            <div className="w-full">
              <h1 className="card-title">{title}</h1>
              <p>
                Developed by
                <span className="text-purple-600"> productive.io</span>
              </p>
            </div>
            <div className="divider"></div>
            <div className="flex gap-8 py-5">
              <div>
                <img src={download} alt="" />
                <p>Downloads</p>
                <h1 className="font-extrabold text-3xl">8M</h1>
              </div>
              <div>
                <img src={star} alt="" />
                <p>Average Ratings</p>
                <h1 className="font-extrabold text-3xl">4.9</h1>
              </div>
              <div>
                <img src={like} alt="" />
                <p>Total Reviews</p>
                <h1 className="font-extrabold text-3xl">54k</h1>
              </div>
            </div>
            <button
              onClick={handleInstalled}
              disabled={installed}
              className={`mt-4 px-5 py-2 text-white rounded-md transition duration-300 ${
                installed
                  ? "bg-green-300 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {installed ? "✅ Installed" : `Install Now (${size}MB)`}
            </button>
            <ToastContainer />
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <RatingChart></RatingChart>
        </div>
        <div className="divider"></div>
        <h1 className="font-bold text-2xl">Description</h1>
        {description &&
          (() => {
            const words = description.split(" ");
            const partLength = Math.ceil(words.length / 3);
            const parts = [
              words.slice(0, partLength).join(" "),
              words.slice(partLength, partLength * 2).join(" "),
              words.slice(partLength * 2).join(" "),
            ];

            return (
              <>
                <p className="mb-5">{parts[0]}</p>
                <p className="mb-5">{parts[1]}</p>
                <p>{parts[2]}</p>
              </>
            );
          })()}
      </div>
    </div>
  );
};

export default AppDetails;
