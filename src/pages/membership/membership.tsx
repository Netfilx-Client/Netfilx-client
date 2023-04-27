import React, { useEffect, useRef, useState } from "react";

interface MembershipProps {
  children?: React.ReactElement | React.ReactElement[];
}
const Membership = (props: MembershipProps) => {
  return (
    <div className="Membership_Container">
      <img
        className="membership_device_img"
        src="https://static.vecteezy.com/system/resources/previews/004/241/096/original/device-screen-set-laptop-smartphone-tablet-computer-monitor-pc-laptop-computer-smartphone-tablet-simple-icons-set-free-vector.jpg"
      />
    </div>
  );
};
export default Membership;
