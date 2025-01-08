import React, { useEffect } from "react";
import "../css/RmageddonUnlock.css";
import AOS from "aos";
import "aos/dist/aos.css";

const RmageddonUnlock = ({ className }) => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      // once: true, 
    });
  }, []);
  return (
    <div className="rmageddonUnlock">
      <div className="rmageddonUnlockTextContent">
        <div className="rmageddonUnlockRightAngleLine">
          <div className="rightAngle">
            <div className="lineVertical"></div>
            <div className="lineHorizontal"></div>
          </div>
          <div className="unlockTextContent">
            <div className="unlockTextContentTitle" data-aos="fade-right">
              Unlock Your Potential through Rmageddon After Participating
            </div>
            <div className="unlockTextContentInfo" >
                <li data-aos="fade-right"> Development of teamwork and learn "GAMESMANSHIP" and
                "CREATIVITY" - a crucial 21st century skills. </li>

                <li data-aos="fade-right">Exceptional hands-on learning experience with designing,
                building and complement your engineering curriculum. </li>

                <li data-aos="fade-right">Exciting Prizes,Certificates after completion and a ton of
                excitement. </li>

                <li data-aos="fade-right">By participating in the competition, familiarize yourself with
                SCI-FI realm. </li>

            </div>
            <div className="unlockTextContentButtons">
              <div className="cashPrize" data-aos="zoom-in">
                <div className="cashPrizeTitle">Cash Prize</div>
                <div className="cashPrizeInfo">Cash prize up to 1.2 lakh .</div>
              </div>
              <div className="cashPrize" data-aos="zoom-in" data-aos-delay="200">
                <div className="cashPrizeTitle">
                Certificate of Participation
                </div>
                <div className="cashPrizeInfo">
                Every Participant will get the Certificate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rmageddonUnlockImages">
        <div className="rmageddonBumblebee">
          <img src={"https://res.cloudinary.com/dupeml4xm/image/upload/v1736305645/bumblebee_j2iltw.png"} alt=""  data-aos="fade-left"  data-aos-delay="800"/>
        </div>
        <div className="rmageddonUnlockRmageddon">
       <img src={"https://res.cloudinary.com/dupeml4xm/image/upload/v1736305852/rmageddon_eaiy7g.png"} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RmageddonUnlock;
