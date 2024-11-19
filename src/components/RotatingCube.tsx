import React from "react";
import { useNavigate } from "react-router-dom";

const RotatingCube = () => {

  const navigate = useNavigate(); // Hook để điều hướng

  const handleButtonClick = () => {
    navigate("/projects"); // Chuyển đến trang Projects
  };

  return (
    <div className="rotatingcube-container">
      <div className="rotating-cube">
        {/* Front Face */}
        <div className="rotatingface front">
          <img src="/src/assets/Project/ybl-mockup.png" alt="Front" className="cube-image" />
        </div>

        {/* Back Face */}
        <div className="rotatingface back">
          <img src="/src/assets/Project/blue-carbon-mockup.png" alt="Back" className="cube-image" />
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
      <button className="inline-flex text-lg rounded-lg font-semibold bg-white text-txt_heading px-12 py-5 leading-8 our-project" onClick={handleButtonClick}>
      <span className="text">Our Projects</span>
      <span className="arrow">→</span>
      </button>
    </div>
  );
};

export default RotatingCube;