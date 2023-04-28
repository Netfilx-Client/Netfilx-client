import React, { useEffect, useRef, useState } from "react";

interface HeaderProps {
  children?: React.ReactElement | React.ReactElement[];
}
const Header = (props: HeaderProps) => {
  return (
    <div className="Header_container">
      <div className="Header_logo"></div>
      <div className="Header_right">
        <div className="Header_language">
          <select name="Header_LanguageSelect" id="Header_LanguageSelect">
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
export default Header;
