import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

const GlobalContainer = () => {
  return (
    <div
      className="root"
      style={{ padding: "0 1.5rem", backgroundColor: "var(--navy)" }}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default GlobalContainer;
