import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
