import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import theme from "../../styles/theme";

const GlobalContainer = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default GlobalContainer;
