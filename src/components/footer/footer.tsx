import React, { useEffect, useRef, useState } from "react";
import icon from "../../assets/icons/icon";

interface FooterProps {
  children?: React.ReactElement | React.ReactElement[];
}
const Footer = (props: FooterProps) => {
  return (
    <div className="Footer_container" style={{ color: "#fff" }}>
      <div className="Footer_PhoneNumber">
        <p>질문 있으신가요? </p> &nbsp;<p>문의 전화 : 080 - 011 - 9587</p>
      </div>
      <div className="Footer_ShortCuts">
        <ul>
          <li>
            <a href="#">자주 묻는 질문</a>
          </li>
          <li>
            <a href="#">고객 센터</a>
          </li>
          <li>
            <a href="#">넷플릭스 스토어</a>
          </li>
          <li>
            <a href="#">이용 약관</a>
          </li>
          <li>
            <a href="#">개인정보 처리 방침</a>
          </li>
          <li>
            <a href="#">쿠키 설정</a>
          </li>
          <li>
            <a href="#">회사 정보</a>
          </li>
        </ul>
      </div>
      <div className="Footer_Language">
        <select
          name="Footer_LanguageSelect"
          id="Footer_LanguageSelect"
          style={
            {
              // background: `url(${icon.global}) 5px center no-repeat`,
            }
          }
        >
          <option label="한국어" value="korea">
            한국어
          </option>
          <option label="English" value="english">
            English
          </option>
        </select>
      </div>
      <div className="Footer_Information">
        넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
        제2018-서울종로-0426호 전화번호: 080-001-9587
        <br />
        대표: 레지널드 숀 톰프슨
        <br />
        이메일 주소: korea@netflix.com
        <br />
        주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층
        <br />
        우편번호 03161 사업자등록번호: 165-87-00119 클라우드 호스팅: Amazon Web
        <br />
        Services Inc. 공정거래위원회 웹사이트
      </div>
    </div>
  );
};
export default Footer;
