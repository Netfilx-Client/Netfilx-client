import React, { useEffect, useRef, useState } from "react";
import Icon from "../../assets/icons/icon";
import $ from "jquery";

interface LoginHeaderProps {
  children?: React.ReactElement | React.ReactElement[];
}
const LoginHeader = (props: LoginHeaderProps) => {
  const mobileMenu = () => {
    $(".mobile_ul").slideToggle();
    console.log(true);
  };
  return (
    <div className="LoginHeader_container">
      <div className="LoginHeader_left">
        <div className="LoginHeader_logo"></div>
        <div className="LoginHeader_menu">
          <ul>
            <li>
              <a href="">시리즈</a>
            </li>
            <li>
              <a href="">영화</a>
            </li>
            <li>
              <a href="">NEW! 요즘 대세 콘텐츠</a>
            </li>
            <li>
              <a href="">내가 찜한 콘텐츠</a>
            </li>
            <li>
              <a href="">언어별로 찾아보기</a>
            </li>
          </ul>
        </div>
        <div className="LoginHeader_mobileMenu">
          <div className="LoginHeader_cbtn" onClick={mobileMenu}>
            메뉴
            <Icon.under />
          </div>
          <ul className="mobile_ul">
            <li>
              <a href="">홈</a>
            </li>
            <li>
              <a href="">시리즈</a>
            </li>
            <li>
              <a href="">영화</a>
            </li>
            <li>
              <a href="">NEW! 요즘 대세 콘텐츠</a>
            </li>
            <li>
              <a href="">내가 찜한 콘텐츠</a>
            </li>
            <li>
              <a href="">언어별로 찾아보기</a>
            </li>
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
        <div className="LoginHeader_profile">
          <img src="" alt="" />
          <Icon.under />
        </div>
      </div>
    </div>
  );
};
export default LoginHeader;
