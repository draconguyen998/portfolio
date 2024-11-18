import React from "react";
import Marquee from "../components/Marquee";
import RotatingCube from "../components/RotatingCube";
//import RotatingCube from "../components/RotatingCube";

const Home = () => {
  return (
    // <div className="home">
    //   <h1 className="text-center text-4xl font-bold my-10 text-white">
    //     Welcome to Our Services
    //   </h1>
    //   <Marquee />
    <div className="home bg-black text-white">
      <section className="text-center py-10 ">
      <Marquee />
      <h1 className="text-[12vw] font-bold text-white text-opacity-80">
              DESIGN*DRAFLY
      </h1>
      <RotatingCube />
        <p className="mt-4 text-lg">
          At DesignCube, we specialize in web design, SEO, UI/UX, branding, and digital marketing. Elevate your brand and transform your digital presence with our innovative design solutions.
        </p>
      </section>

      {/* Rotating Cube Section */}
      {/* <div className="py-20">
        <RotatingCube />
      </div> */}

    </div>
  );
};

export default Home;