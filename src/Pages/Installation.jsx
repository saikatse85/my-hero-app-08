import React, { useEffect, useState } from "react";
import download from "/download.png";
import star from "/star.png";
import { ToastContainer, toast } from "react-toastify";

const Installation = () => {
  const [installed, setInstalled] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const savedApp = JSON.parse(localStorage.getItem("installed"));
    if (savedApp) setInstalled(savedApp);
  }, []);

  const sortedItem = (() => {
    if (sortOrder === "downloads-asc") {
      return [...installed].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "downloads-descending") {
      return [...installed].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installed;
    }
  })();

  const handleRemove = (id) => {
    const existingInstalled = JSON.parse(localStorage.getItem("installed"));
    let updateInstalled = existingInstalled.filter((a) => a.id !== id);
    setInstalled(updateInstalled);
    localStorage.setItem("installed", JSON.stringify(updateInstalled));
    toast.warn("🗑️ App Uninstalled Successfully!", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div className="bg-[#f1f5e8] pb-80">
      <div className="screen-w">
        <div className="text-center pt-5">
          <h1 className="text-4xl font-bold pb-4">Your Installed App</h1>
          <p>Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className="flex justify-between pt-5">
          <h1 className="text-2xl font-bold">({sortedItem.length})App Found</h1>
          <select
            className="btn bg-green-700 text-white"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by size</option>
            <option value="downloads-asc">Low to high</option>
            <option value="downloads-descending">High to Low</option>
          </select>
        </div>
        {sortedItem.map((a) => (
          <div
            key={a.id}
            className="flex justify-between items-center mx-auto py-5 bg-gray-100 p-2 border-1 border-gray-200 shadow-sm my-5 rounded-sm"
          >
            <div className="flex items-center gap-3">
              <div>
                <img className="h-30 w-30 rounded-lg" src={a.image} alt="" />
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
              <button
                onClick={() => handleRemove(a.id)}
                className="btn bg-green-700 text-white"
              >
                UnInstalled
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Installation;
