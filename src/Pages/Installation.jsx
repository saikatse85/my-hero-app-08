import React, { useEffect, useState } from "react";
import download from "/download.png";
import star from "/star.png";

const Installation = () => {
  const [installed, setInstalled] = useState([]);

  useEffect(() => {
    const savedApp = JSON.parse(localStorage.getItem("installed"));
    if (savedApp) setInstalled(savedApp);
  }, []);
  return (
    <div className="bg-[#f1f5e8]">
      <div className="screen-w">
        <div className="text-center pt-5">
          <h1 className="text-4xl font-bold pb-4">Your Installed App</h1>
          <p>Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className="flex justify-between pt-5">
          <h1 className="text-2xl font-bold">({installed.length})App Found</h1>
          <button className="btn bg-green-600 text-white">Short by Size</button>
        </div>
        {installed.map((a) => (
          <div className="flex justify-between items-center mx-auto py-5 bg-gray-100 p-2 border-1 border-gray-200 shadow-sm my-5">
            <div className="flex items-center gap-3">
              <div>
                <img className="h-40 w-40 rounded-lg" src={a.image} alt="" />
              </div>
              <div className="space-y-8">
                <h3 className="text-2xl">{a.title}</h3>
                <div className="flex gap-5">
                  <p className="text-green-700 flex items-center gap-1">
                    <img className="h-5 w-5" src={download} alt="" />
                    {a.downloads}
                  </p>
                  <p className="text-orange-500 flex items-center gap-1">
                    <img className="h-5 w-5" src={star} alt="" />
                    {a.ratingAvg}
                  </p>
                  <p>{a.size}mb</p>
                </div>
              </div>
            </div>
            <div>
              <button className="btn bg-green-600 text-white">UnInstall</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
