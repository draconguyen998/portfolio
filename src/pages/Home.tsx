import React from "react";
import Marquee from "../components/Marquee";

const Home = () => {
  return (
    <div className="home">
      <h1 className="text-center text-4xl font-bold my-10 text-white">
        Welcome to Our Services
      </h1>
      <Marquee />
    </div>
  );
};

export default Home;