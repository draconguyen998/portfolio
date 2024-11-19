import React from "react";

const RotatingCube = () => {
  return (
    <div className="rotatingcube-container">
      <div className="rotating-cube">
        {/* Front Face */}
        <div className="rotatingface front">
          <img src="/path-to-image1.jpg" alt="Front" className="cube-image" />
        </div>

        {/* Back Face */}
        <div className="rotatingface back">
          <img src="/path-to-image2.jpg" alt="Back" className="cube-image" />
        </div>

        {/* Left Face */}
        <div className="rotatingface left">
          <img src="/path-to-image3.jpg" alt="Left" className="cube-image" />
        </div>

        {/* Right Face */}
        <div className="rotatingface right">
          <img src="/path-to-image4.jpg" alt="Right" className="cube-image" />
        </div>
      </div>
      <button className="text-lg rounded-lg font-semibold bg-white text-txt_heading px-12 py-3 leading-8 our-project">Our Projects</button>
    </div>
  );
};

export default RotatingCube;