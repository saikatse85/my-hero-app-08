import React from "react";
import useApps from "../Hooks/useApps";
import AppsCard from "../Components/AppsCard";
import { Link } from "react-router";
import Banner from "../../src/assets/hero.png";
import SkeletonLoader from "../Components/SkeletonLoader";
import appStore from "/appstore.png";
import playStore from "/playStore.png";

const Home = () => {
  const { apps, loading, error } = useApps();

  if (loading) return <SkeletonLoader />;

  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;
  const featuredApps = apps.slice(0, 8);
  return (
    <div>
      <div className="bg-[#f1f5e8] pb-10">
        <h1 className="text-center font-bold text-5xl py-10">
          We Build <br />{" "}
          <span className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="text-center">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="flex items-center justify-center pt-5 gap-4">
          <Link to="https://play.google.com/store/games?hl=en">
            <button className="btn bg-[#f1f5e8] border-1 border-gray-300">
              <img src={appStore} alt="" />
              Google Play
            </button>
          </Link>
          <Link to="https://play.google.com/store/apps?hl=en">
            <button className="btn bg-[#f1f5e8] border-1 border-gray-300">
              <img src={playStore} alt="" />
              App Store
            </button>
          </Link>
        </div>
        <img className="mx-auto pt-10" src={Banner} alt="" />
        <div className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] py-10">
          <h2 className="text-white text-center text-3xl font-semibold">
            Trusted by Millions, Built for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center pt-10">
            <div className="text-white text-center">
              <h3>Total Downloads</h3>
              <h1 className="font-extrabold text-5xl">29.6M</h1>
              <h3>21% more than last month</h3>
            </div>
            <div className="text-white text-center">
              <h3>Total Reviews</h3>
              <h1 className="font-extrabold text-5xl">906K</h1>
              <h3>46% more than last month</h3>
            </div>
            <div className="text-white text-center">
              <h3>Active Apps</h3>
              <h1 className="font-extrabold text-5xl">132+</h1>
              <h3>31 more will Launch</h3>
            </div>
          </div>
        </div>
        <div className="pt-10">
          <h1 className="text-center font-bold text-3xl">Trending Apps</h1>
          <h3 className="text-center">
            Explore All Trending Apps on the Market developed by us
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 screen-w py-4 md:py-8 lg:py-12">
          {loading ? (
            <SkeletonLoader />
          ) : (
            featuredApps.map((app) => (
              <AppsCard key={app.id} app={app}></AppsCard>
            ))
          )}
        </div>
        <div className="text-center">
          <Link
            to="/app"
            className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-white"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
