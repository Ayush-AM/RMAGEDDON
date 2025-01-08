import React,{useEffect} from "react";
import "../css/DateTimeInfo.css";
import AOS from "aos";
import "aos/dist/aos.css";

const DateTimeInfo = ({className}) => {
   useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <div className={className} data-aos="fade-up"  data-aos-delay="500">
      <div className="dateInfo">
        <div className="dateGamesQuantity">No. of Games</div>
        <div className="dateGamesText">5</div>
      </div>
      <div className="dateInfo">
        <div className="dateDays">Days</div>
        <div className="dateMonth">21,22,23 Feb 2025</div>
      </div>
      <div className="dateInfo">
        <div className="datelocationlogo"> <a href="https://www.google.com/maps/place/SGGS,+Vishnupuri,+Nanded,+Maharashtra+431606/@19.1125052,77.2919834,18z/data=!4m6!3m5!1s0x3bce29f0b2e43199:0xe11b84ac3144b2b4!8m2!3d19.1120015!4d77.2924127!16s%2Fg%2F11g1gt0047?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">location</a></div>
        <div className="dateLocation">SGGSIE&T, Nanded</div>
      </div>
    </div>
  );
};

export default DateTimeInfo;
