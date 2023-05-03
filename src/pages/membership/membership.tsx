import React, { useEffect, useRef, useState } from "react";

interface MembershipProps {
  children?: React.ReactElement | React.ReactElement[];
}
const Membership = (props: MembershipProps) => {
<<<<<<< Updated upstream
  return <div className="Membership_Container"></div>;
=======
  const nextContent = () => {};
  return (
    <div className="Membership_Container">
      <img
        className="membership_device_img"
        src="https://static.vecteezy.com/system/resources/previews/004/241/096/original/device-screen-set-laptop-smartphone-tablet-computer-monitor-pc-laptop-computer-smartphone-tablet-simple-icons-set-free-vector.jpg"
      />
      <span className="step-1">
        <b>1/3</b>단계
      </span>
      <h1>계정 설정 마무리하기</h1>
      <p>
        맞춤형 콘텐츠 서비스, 넷플릭스!
        <br />
        비밀번호를 설정해 다양한
        <br />
        디바이스에서 아무 때나 시청하세요.
      </p>
      <button className="membership_btn" onClick={nextContent}>
        다음
      </button>
    </div>
  );
>>>>>>> Stashed changes
};
export default Membership;
