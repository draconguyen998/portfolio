import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Cube from "./Cube";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-bg_primary">
      <Header />
      <main className="relative z-">{children}</main> {/* Nội dung luôn trên cube */}
      <Footer />
      <Cube />
    </div>
  );
};

export default Layout;