import React, { useEffect, useRef, useState } from "react";
import Icon from "../../assets/icons/icon";

interface LoginHeaderProps {
  children?: React.ReactElement | React.ReactElement[];
}
const LoginHeader = (props: LoginHeaderProps) => {
  return (
    <div className="LoginHeader_container">
      <div className="LoginHeader_left">
        <div className="LoginHeader_logo"></div>
        <div className="LoginHeader_menu">
          <ul>
            <li>홈</li>
            <li>시리즈</li>
            <li>영화</li>
            <li>NEW! 요즘 대세 콘텐츠</li>
            <li>내가 찜한 콘텐츠</li>
            <li>언어별로 찾아보기</li>
          </ul>
        </div>
      </div>
      <div className="LoginHeader_right">
        <div className="LoginHeader_search">
          <Icon.ReadingGlasses />
        </div>
        <div className="LoginHeader_alert">
          <Icon.alert />
        </div>
        <div className="LoginHeader_profile"></div>
      </div>
    </div>
  );
};
export default LoginHeader;
