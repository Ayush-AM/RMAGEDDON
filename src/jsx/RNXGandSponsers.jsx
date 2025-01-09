import React, { useEffect } from "react";
import "../css/RNXGandSponsers.css";
import RNXG from "./RNXG";
import AOS from "aos";
import "aos/dist/aos.css";
import HorizontalSlider from "./HorzontalSlider";

const RNXGandSponsers = ({ className }) => {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  // const sponsor = [
  //   {
  //     name: "RoboTech Innovators",
  //     description: "Leading the world in advanced robotics solutions.",
  //     website: "https://robotech.com",
  //   },
  //     {
  //       name: "AI Nexus",
  //       description: "Revolutionizing industries through AI-powered technology.",
  //       website: "https://ainexus.com",
  //     },
  //     {
  //       name: "MechMasters Inc.",
  //       description: "Pioneering mechanical engineering for future generations.",
  //       website: "https://mechmasters.com",
  //     },
  //   {
  //     name: "CircuitCore Solutions",
  //     description: "Building smarter circuits for innovative designs.",
  //     website: "https://circuitcore.com",
  //   },
  //   {
  //     name: "Quantum Systems",
  //     description: "Exploring the next frontier of quantum computing.",
  //     website: "https://quantumsystems.com",
  //   },
  //   // {
  //   //   name: "CodeGenix",
  //   //   description: "Empowering coders with cutting-edge software tools.",
  //   //   website: "https://codegenix.com",
  //   // },
  // ];

  return (
    <div className="rnxgAndSponsers">
    
      <div className="oragnisers">
        <img src={"https://res.cloudinary.com/dupeml4xm/image/upload/v1736305101/organisers_ixmomu.png"} alt="" />
      </div>
      <div className="rnxgandSponsersInfo">
        <div className="rnxgandSponserOrganiserInfo">
          <RNXG className="rnxgandSponserOrganiserInfo" />
        </div>
        <div className="rnxgandSponserSponserInfo">
          <div
            className="rnxgandSponserSponserTitle"
            data-aos="fade-right"
          >
            Our Sponsors
          </div>
          <div className="HorizontalSlider" data-aos="fade-up">
            <HorizontalSlider className="HorizontalSlider" />
          </div>
        </div>
      </div>
      <div className="sponsers">
        <img src={"https://res.cloudinary.com/dupeml4xm/image/upload/v1736305158/sponsers_lqoxmh.png"} alt="" />
      </div>
    </div>
  );
};

export default RNXGandSponsers;
