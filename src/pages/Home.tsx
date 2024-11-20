// import React from "react";
// import Marquee from "../components/Marquee";
import Marquee from "../components/Marquee";
import RotatingCube from "../components/RotatingCube";
import React, { useEffect, useState } from "react";

const Home = () => {
  // const [scrollProgress, setScrollProgress] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const windowHeight = window.innerHeight;

  //     // Tính toán tiến trình scroll trong khoảng từ 0 đến 1
  //     const progress = Math.min(Math.max(scrollY / (windowHeight * 1.5), 0), 1);
  //     setScrollProgress(progress);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const slides = [
  //   {
  //     title: "Innovative Solutions, Timeless Design",
  //     description:
  //       "We blend creativity and technology to deliver designs that stand the test of time.",
  //     number: "01",
  //   },
  //   {
  //     title: "Crafting Digital Experiences",
  //     description:
  //       "We create engaging and intuitive digital experiences tailored to your audience.",
  //     number: "02",
  //   },
  //   {
  //     title: "Your Vision, Our Expertise",
  //     description:
  //       "Partner with us to bring your ideas to life with precision and creativity.",
  //     number: "03",
  //   },
  // ];

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Tính toán tiến trình scroll trong khoảng từ 0 đến 1
      const progress = Math.min(Math.max(scrollY / (windowHeight * 1.5), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY || document.documentElement.scrollTop;
  //     setScrollProgress(scrollTop * 0.2); // Điều chỉnh tốc độ xoay
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);


  const slides = [
    {
      title: "Innovative Solutions, Timeless Design",
      description:
        "We blend creativity and technology to deliver designs that stand the test of time.",
      number: "01",
    },
    {
      title: "Crafting Digital Experiences",
      description:
        "We create engaging and intuitive digital experiences tailored to your audience.",
      number: "02",
    },
    {
      title: "Your Vision, Our Expertise",
      description:
        "Partner with us to bring your ideas to life with precision and creativity.",
      number: "03",
    },
    {
      title: "Your Vision, Our Expertise",
      description:
        "Partner with us to bring your ideas to life with precision and creativity.",
      number: "04",
    },
  ];

  return (
    <div className="home bg-black text-white relative">
      {/* Section 1: Marquee */}
      <section className="bg-black py-6">
        <Marquee />
      </section>
      {/* Section 1: DESIGN*DRAFLY */}
      <section className="text-center relative py-12">
        <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[12.5vw] font-bold text-white text-opacity-90 z-0">
          DESIGN*DRAFLY
        </h1>

        {/* Khối Cube nằm dưới chữ DESIGN*DRAFLY */}
        <div className="w-full flex justify-center pt-16">
          <RotatingCube />
        </div>
      </section>

      {/* Section 2: Nội dung văn bản */}
      <section className="content-container max-w-screen-xl mx-auto px-6 pb-5">
        {/* Đoạn văn bản bên trái */}
        {/* <div className="text-content max-w-screen-md mx-auto px-6"> */}
        <div className="flex items-start justify-between">
          <div className="left-text w-1/2 text-left">
            <p>
              At DesignCube, we specialize in web design, SEO, UI/UX, branding,
              and digital marketing. Elevate your brand and transform your
              digital presence with our innovative design solutions.
            </p>
          </div>

          {/* Đoạn văn bản bên phải */}
          <div className="right-text w-1/2 text-right">
            <p>
              *ESTABLISHED — 2024
              <br />
              BUCHAREST, ROMANIA
            </p>
          </div>
        </div>
      </section>
      <section className="about-section pb-5">
        <div className="about-container" style={{ opacity: 1 - scrollProgress * 1.5 }}>
          <h1 className="about-heading text-[15vw] font-bold text-white text-opacity-90">
            ABOUT*US
          </h1>
          <div className="scroll-indicator ">
            <div className="scroll-line"></div>
            <div className="scroll-dot"></div>
            <div className="scroll-line"></div>
          </div>
        </div>
      </section>

      <section className="about-section pb-5">
        <div className="relative h-[200vh] bg-black overflow-hidden">
          {/* ABOUT Text */}
          <div
            className="absolute top-0 left-0 w-full text-[10vw] font-bold text-white flex justify-center items-center"
            style={{ opacity: 1 - scrollProgress * 1.5 }}
          >
            ABOUT
          </div>

          {/* Content Box */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
            {slides.map((slide, index) => {
              const slideProgress = Math.min(
                Math.max(scrollProgress * slides.length - index, 0),
                1
              );

              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1080px] h-[264px] p-[20px_36px] rounded-lg flex items-center justify-between bg-bg_primary_5 text-white shadow-lg"
                  style={{
                    width: "1024px",
                    height: "264px",
                    padding: "20px 36px",
                    opacity: slideProgress,
                    transform: `translate(-50%, -50%) translateY(${(1 - slideProgress) * 50}px)`,
                  }}
                
                >
                  {/* Nội dung bên trái */}
                  <div className="relative z-10 flex flex-col items-start">
                    <h3 className="text-primary text-[24px] md:text-2xl font-semibold mb-4">
                      {slide.title}
                    </h3>
                    <p className="text-base md:text-lg">{slide.description}</p>
                  </div>

                  {/* Số lớn bên phải */}
                  <div className="relative text-[250px] text-white font-bold opacity-30 z-0">
                    {slide.number}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
