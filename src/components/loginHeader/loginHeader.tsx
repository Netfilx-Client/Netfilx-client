import React, { useEffect, useRef, useState } from "react";

interface LoginHeaderProps {
  children?: React.ReactElement | React.ReactElement[];
}
const LoginHeader = (props: LoginHeaderProps) => {
  return (
    <div className="LoginHeader_container">
      <div className="LoginHeader_logo"></div>
      <div className="LoginHeader_right">
        <div className="LoginHeader_language">
          <select name="LoginHeader_LanguageSelect" id="Header_LanguageSelect">
            <option label="한국어" value="korea">
              한국어
            </option>
            <option label="English" value="english">
              English
            </option>
          </select>
        </div>
        <div className="Header_login">로그인</div>
      </div>
    </div>
  );
};
export default LoginHeader;
