// import React from "react";
// import Marquee from "../components/Marquee";
import Marquee from "../components/Marquee";
import RotatingCube from "../components/RotatingCube";
//import RotatingCube from "../components/RotatingCube";

const Home = () => {
  return (
    // // <div className="home">
    // //   <h1 className="text-center text-4xl font-bold my-10 text-white">
    // //     Welcome to Our Services
    // //   </h1>
    // //   <Marquee />
    // <div className="home bg-black text-white relative">
    //   <section className="text-center py-10 ">
    //   <Marquee />
    //   <h1 className="text-[12vw] font-bold text-white text-opacity-80">
    //           DESIGN*DRAFLY
    //   </h1>
    //   <RotatingCube />
    //     {/* <p className="mt-4 text-lg">
    //       At DesignCube, we specialize in web design, SEO, UI/UX, branding, and digital marketing. Elevate your brand and transform your digital presence with our innovative design solutions.
    //     </p> */}
    //   </section>

    //   {/* Nội dung chính */}
    //   <section className="flex justify-between items-center max-w-screen-xl mx-auto mt-20 px-6">
    //     {/* Đoạn text bên trái */}
    //     <div className="w-1/3 text-left">
    //       <p>
    //         At DesignCube, we specialize in web design, SEO, UI/UX, branding, and digital marketing. Elevate your brand and transform your digital presence with our innovative design solutions.
    //       </p>
    //     </div>

    //     {/* Đoạn text bên phải */}
    //     <div className="w-1/3 text-right">
    //       <p>
    //         *ESTABLISHED — 2024<br />
    //         BUCHAREST, ROMANIA
    //       </p>
    //     </div>
    //   </section>

    //   {/* Rotating Cube Section */}
    //   {/* <div className="py-20">
    //     <RotatingCube />
    //   </div> */}

    // </div>

    <div className="home bg-black text-white relative">
      {/* Section 1: Marquee */}
      <section className="bg-black py-6">
        {/* <div className="marquee-container">
          <div className="marquee-content">
            <span className="marquee-item">✦ Content Creation</span>
            <span className="marquee-item">✦ Social Media Management</span>
            <span className="marquee-item">✦ Video Production</span>
            <span className="marquee-item">✦ Consulting Services</span>
            <span className="marquee-item">✦ Web Design</span>
            <span className="marquee-item">✦ Branding</span>
            <span className="marquee-item">✦ UI/UX Design</span>
            <span className="marquee-item">✦ Web Development</span>
            <span className="marquee-item">✦ Mobile Development</span>
            <span className="marquee-item">✦ 3D Design</span>
          </div>
        </div> */}
        <Marquee />
      </section>
     {/* Section 1: DESIGN*DRAFLY */}
     <section className="text-center relative py-16">
        <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[12.5vw] font-bold text-white text-opacity-70 z-0">
          DESIGN*DRAFLY
        </h1>
        
        {/* Khối Cube nằm dưới chữ DESIGN*DRAFLY */}
        <div className="w-full flex justify-center pt-16">
          <RotatingCube />
        </div>
      </section>

      {/* Section 2: Nội dung văn bản */}
      <section className="content-container max-w-screen-xl mx-auto px-6 pb-40">
        {/* Đoạn văn bản bên trái */}
        {/* <div className="text-content max-w-screen-md mx-auto px-6"> */}
        <div className="flex items-start justify-between">
        <div className="left-text w-1/2 text-left">
          <p>
            At DesignCube, we specialize in web design, SEO, UI/UX, branding, and digital marketing. Elevate your brand and transform your digital presence with our innovative design solutions.
          </p>
        </div>
          
        {/* Đoạn văn bản bên phải */}
        <div className="right-text w-1/2 text-right">
          <p>
            *ESTABLISHED — 2024<br />
            BUCHAREST, ROMANIA
          </p>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
