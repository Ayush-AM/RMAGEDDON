import React, { useEffect } from "react";
import "../css/Glimpses.css";
import VerticalImageSlider from "./VerticalImageSlider ";
import glimpses from "../images/PastGlimpses.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Glimpses = ({ className }) => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);
  return (
    <>
      <div className="rmgandglimpse">
        <div className="line1">
          <div className="line1VerticalLine"> </div>
          <div className="line1Horizontal"></div>
        </div>
        <div className="whichContainGlimpsesewithtext">
          <div className="rmageddonGlimpsesOne">
            <div className="text-section-page4">
              {/* <div className="page4textsection"> */}
              <div className="text-rmg-line" data-aos="fade-right">
                Steps to confirm your seat in RMAGEDDON-25
              </div>
              <div className="text-content-page4-line" >
                <div className="rmageddonParticipationSteps">
                  <div className="timeLine" data-aos="fade-right">
                    <i className="fas fa-check-circle"></i>
                    <div className="lineBelowTick"></div>
                  </div>
                  <div className="stepsInfo">
                    <div className="textTitleSteps" data-aos="fade-right">Filling Up the Form :</div>
                    <div className="textInfoSteps" data-aos="fade-right">
                      Please visit the Register button given in Events page
                      which will redirect you to UNSTOP. On visiting UNSTOP you
                      should fill all the required details with accurate
                      information before the registration deadline. Kindly make
                      sure to submit the required fee payment as well.
                    </div>
                  </div>
                </div>
                <div className="rmageddonParticipationSteps">
                  <div className="timeLine" data-aos="fade-right">
                    <i className="fas fa-check-circle"></i>
                    <div className="lineBelowTick"></div>
                  </div>
                  <div className="stepsInfo">
                    <div className="textTitleSteps" data-aos="fade-right">Verifying Details :</div>
                    <div className="textInfoSteps" data-aos="fade-right">
                      Our team will conduct a thorough verification of the
                      information provided by you. If we encounter any issues
                      during the verification process, we will contact the
                      relevant team for resolution. If everything is in order,
                      you can expect to receive a confirmation email within 1-2
                      days.
                    </div>
                  </div>
                </div>
                <div className="rmageddonParticipationSteps">
                  <div className="timeLine" data-aos="fade-right">
                    <i className="fas fa-check-circle"></i>
                    <div className="lineBelowTick"></div>
                  </div>
                  <div className="stepsInfo">
                    <div className="textTitleSteps" data-aos="fade-right">
                      Enter the cosmos of Robotics :
                    </div>
                    <div className="textInfoSteps" data-aos="fade-right">
                      Upon receipt of the confirmation email, be ready to
                      conquer the competition on Feb, 2025. We welcome you all
                      in the cosmos of robotics and wish you to acquire the
                      crown of victory.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rmageddonGlimpsesTwo">
            <div className="lastyearglimpses" data-aos="fade-up">Last Year Glimpses</div>
            <div className="verticalSlider" data-aos="fade-left">
              <VerticalImageSlider className="verticalSlider" />
            </div>
          </div>
        </div>
        <div className="line2">
          <div className="line2HorizontalLine"></div>
          <div className="lineWithImg">
            <div className="line2VerticalLine"> </div>
            <div className="textGlimpsesTitle">
              <img src={glimpses} alt="" srcSet="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Glimpses;
