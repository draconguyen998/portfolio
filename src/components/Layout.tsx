import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cube from "./Cube";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative">
      <Header />
      <main className="relative z-10 pt-20">{children}</main>
      <Footer />
      {/* Cube luôn hiển thị */}
      <Cube />
    </div>
  );
};

export default Layout;