import React from "react";

// const Marquee = () => {
// const items = [
//   "UI UX Design",
//   "Web Development",
//   "Mobile Development",
//   "Mobile App Design",
//   "3D Design",
//   "Content Creation",
//   "Social Media Management",
//   "Video Production",
//   "Consulting Services",
//   "Web Design",
//   "Branding",
// ];

// return (
//   // <div className="marquee-container">
//   //   <div className="marquee-track">
//   //     <div className="marquee-content">
//   //       <span>✦ Content Creation</span>
//   //       <span>✦ Social Media Management</span>
//   //       <span>✦ Video Production</span>
//   //       <span>✦ Consulting Services</span>
//   //       <span>✦ Web Design</span>
//   //       <span>✦ Branding</span>
//   //       <span>✦ UI/UX Design</span>
//   //       <span>✦ Web Development</span>
//   //       <span>✦ Mobile Development</span>
//   //       <span>✦ 3D Design</span>
//   //     </div>
//   //     {/* Lặp lại nội dung */}
//   //     <div className="marquee-content">
//   //       <span>✦ Content Creation</span>
//   //       <span>✦ Social Media Management</span>
//   //       <span>✦ Video Production</span>
//   //       <span>✦ Consulting Services</span>
//   //       <span>✦ Web Design</span>
//   //       <span>✦ Branding</span>
//   //       <span>✦ UI/UX Design</span>
//   //       <span>✦ Web Development</span>
//   //       <span>✦ Mobile Development</span>
//   //       <span>✦ 3D Design</span>
//   //     </div>
//   //   </div>
//   // </div>
//   <div className="marquee-container">
//     <div className="marquee-track">
//       {/* Nội dung marquee */}
//       <span>✦ Content Creation</span>
//       <span>✦ Social Media Management</span>
//       <span>✦ Video Production</span>
//       <span>✦ Consulting Services</span>
//       <span>✦ Web Design</span>
//       <span>✦ Branding</span>
//       <span>✦ UI/UX Design</span>
//       <span>✦ Web Development</span>
//       <span>✦ Mobile Development</span>
//       <span>✦ 3D Design</span>
//       {/* Lặp lại nội dung để chạy liên tục */}
//       <span>✦ Content Creation</span>
//       <span>✦ Social Media Management</span>
//       <span>✦ Video Production</span>
//       <span>✦ Consulting Services</span>
//       <span>✦ Web Design</span>
//       <span>✦ Branding</span>
//       <span>✦ UI/UX Design</span>
//       <span>✦ Web Development</span>
//       <span>✦ Mobile Development</span>
//       <span>✦ 3D Design</span>
//     </div>
//   </div>
// );

const Marquee = () => {
  const content = [
    "✦ Content Creation",
    "✦ Social Media Management",
    "✦ Video Production",
    "✦ Consulting Services",
    "✦ Web Design",
    "✦ Branding",
    "✦ UI/UX Design",
    "✦ Web Development",
    "✦ Mobile Development",
    "✦ 3D Design",
  ];

  //   return (
  //     <div className="marquee-container">
  //       <div className="marquee-track">
  //         {/* Nội dung chính */}
  //         {content.map((item, index) => (
  //           <span key={`item-${index}`}>{item}</span>
  //         ))}
  //         {/* Lặp lại nội dung */}
  //         {content.map((item, index) => (
  //           <span key={`item-duplicate-${index}`}>{item}</span>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {/* Nhân đôi nội dung */}
        {[...content, ...content].map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
