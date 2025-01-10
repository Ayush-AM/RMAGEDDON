import React from "react";
import "../css/HeroPage.css";
import NavBar from "./NavBar";
import RmageddonInfo from "./RmageddonInfo";
import Timer from "./Timer";
import DateTimeInfo from "./DateTimeInfo";
import RNXG from "./RNXG";

const HeroPage = () => {
  return (
    <div className="heroPage">
      <NavBar className="heroNavBar" />
      <RmageddonInfo className="heroRmageddonInfo" />
      <div className="timeranddate">
        <Timer className="heroTimer" />
        <DateTimeInfo className="heroDateTimeInfo" />
      </div>
        <RNXG className="heroRNXG" />
    </div>
  );
};

export default HeroPage;
