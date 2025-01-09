import React, { useEffect, useState } from "react";
import "../css/RmageddonInfo.css";

import rmageddon from "../images/rmageddon.mp4"; // Animated video
import AOS from "aos";
import "aos/dist/aos.css";

const RmageddonInfo = ({ className }) => {
  const [loader, setLoader] = useState(true); // Initial state with animation

  useEffect(() => {
    AOS.init({ duration: 8000 }); // Initialize AOS
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false); // Switch to static image after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className={className}>
      {/* Title */}
      <div className="rmageddonTitle" data-aos="fade-down"  data-aos-duration="8000"
    data-aos-delay="7000">
        RMAGEDDON 2025
      </div>

      <div className="rmageddonLogo" >
       
          <img src={"https://res.cloudinary.com/dupeml4xm/image/upload/v1736304967/rmageddonlogo_la1i4v.png"}  />
      
      </div>

      {/* Text Content */}
      <div className="rmageddonText" data-aos="fade-up" data-aos-delay="1200">
        <div className="rmageddonTextTitle">
          Transforming Visions, Revolutionizing Tomorrow
        </div>
        <div className="rmageddonTextInfo">
          Ignite your creativity and push the boundaries of innovation at
          Rmageddon! Showcase your groundbreaking robotic creations, compete
          with the best minds in the field, and claim your place among the
          elite. Gear up for a thrilling fusion of technology, recognition, and
          rewards at the most electrifying robotics event of the year!
        </div>
      </div>
    </div>
  );
};

export default RmageddonInfo;
