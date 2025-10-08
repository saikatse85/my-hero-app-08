import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppsCard from "../Components/AppsCard";
import { FcSearch } from "react-icons/fc";
import { Link } from "react-router";

const Apps = () => {
  const { apps, loading, error } = useApps();
  const [search, setSearch] = useState("");
  const searchValue = search.trim().toLocaleLowerCase();
  const searchedApps = searchValue
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(searchValue))
    : apps;
  if (loading) {
    return <p className="text-center py-10 text-gray-500">Loading apps...</p>;
  }

  if (error) {
    return (
      <p className="text-center py-10 text-red-500">
        Failed to load apps. Try again later.
      </p>
    );
  }

  return (
    <div className="bg-[#f1f5e8]">
      <div className="text-center pt-5">
        <h1 className="text-4xl font-bold pb-4">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between screen-w pt-5">
        <h1 className="text-2xl font-bold">
          ({searchedApps.length}) App{searchedApps.length !== 1 && "s"} Found
        </h1>
        <label className="input">
          <span className="label">
            <FcSearch />
          </span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search App"
          />
        </label>
      </div>
      {searchedApps.length === 0 ? (
        <div className="text-center pb-42">
          <p className="text-center text-gray-500 text-5xl font-bold py-16">
            🚫 No Apps Found.
          </p>
          <Link
            to="/app"
            className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white"
          >
            Show All
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 screen-w py-4 md:py-8 lg:py-8">
          {searchedApps.map((app) => (
            <AppsCard key={app.id} app={app}></AppsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
