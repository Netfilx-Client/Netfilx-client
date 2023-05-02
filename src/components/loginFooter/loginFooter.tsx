import React, { useEffect, useRef, useState } from "react";
import Icon from "../../assets/icons/icon";

interface LoginFooterProps {
  children?: React.ReactElement | React.ReactElement[];
}
const LoginFooter = (props: LoginFooterProps) => {
  return (
    <div className="LoginFooter_container">
      <div className="LoginFooter_sns">
        <Icon.facebook />
        <Icon.insta />
        <Icon.twitter />
        <Icon.youtube />
      </div>
      <div className="LoginFooter_shortCuts">
        <ul>
          <li>
            <a href="#">화면 해설</a>
          </li>
          <li>
            <a href="#">고객 센터</a>
          </li>
          <li>
            <a href="#">기프트 카드</a>
          </li>
          <li>
            <a href="#">미디어 센터</a>
          </li>
          <li>
            <a href="#">투자 정보</a>
          </li>
          <li>
            <a href="#">입사 정보</a>
          </li>
          <li>
            <a href="#">이용 약관</a>
          </li>
          <li>
            <a href="#">개인 정보</a>
          </li>
          <li>
            <a href="#">법적 고지</a>
          </li>
          <li>
            <a href="#">쿠키 설정</a>
          </li>
          <li>
            <a href="#">회사 정보</a>
          </li>
          <li>
            <a href="#">문의 하기</a>
          </li>
        </ul>
      </div>
      <div className="LoginFooter_serviceCode">
        <button>서비스 코드</button>
      </div>
      <div className="LoginFooter_Information">
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
export default LoginFooter;
