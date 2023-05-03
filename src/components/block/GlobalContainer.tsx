import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";
import LoginHeader from "../loginHeader/loginHeader";
import LoginFooter from "../loginFooter/loginFooter";

const GlobalContainer = () => {
  return (
    <div className="root" style={{ backgroundColor: "var(--navy)" }}>
      <LoginHeader />
      <Outlet />
      <LoginFooter />
      {/* <Header />
      <Outlet />
      <Footer /> */}
    </div>
  );
};

export default GlobalContainer;
