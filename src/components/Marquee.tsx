import React from "react";

const Marquee = () => {
  const items = [
    "UI UX Design",
    "Web Development",
    "Mobile Development",
    "Mobile App Design",
    "3D Design",
    "Content Creation",
    "Social Media Management",
    "Video Production",
    "Consulting Services",
    "Web Design",
    "Branding",
  ];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {items.map((item, index) => (
          <span key={index} className="marquee-item">
            ✦ {item}
          </span>
        ))}
        {/* Lặp lại chính danh sách để tạo hiệu ứng liền mạch */}
        {items.map((item, index) => (
          <span key={`repeat-${index}`} className="marquee-item">
            ✦ {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

