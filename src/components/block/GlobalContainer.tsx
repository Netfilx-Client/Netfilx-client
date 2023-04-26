import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

const GlobalContainer = () => {
  return (
    <div className="">
      <Outlet />
    </div>
  );
};

export default GlobalContainer;
