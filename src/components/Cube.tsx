import React, { useState, useEffect } from "react";

const Cube = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Xử lý sự kiện chuột
  const handleMouseMove = (event: MouseEvent) => {
    setPosition({
      x: event.clientX + 20, // Thêm khoảng cách ngang
      y: event.clientY + 20, // Thêm khoảng cách dọc
    });
  };

  // Gắn sự kiện chuột toàn trang
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <div className="cube">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face left"></div>
        <div className="face right"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
    </div>
  );
};

export default Cube;
