import React, { useEffect } from "react";
import "../css/RNXG.css";
import AOS from "aos";
import "aos/dist/aos.css";

const RNXG = ({ className }) => {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true, 
    });
  }, []);

  return (
    <div className={className}>
      <div className="rnxgOrganiser">
        <img src={"https://res.cloudinary.com/dupeml4xm/image/upload/v1736305101/organisers_ixmomu.png"} alt="" />
      </div>
      <div className="rnxgContent">
        <div className="rnxgTitle" data-aos="fade-right">RNXG</div>
        <div className="rnxgInfo" data-aos="zoom-out" data-aos-delay="400">
          Members of the RNXG, regardless of their fields, collaborate as a team
          to generate multidisciplinary technical expertise. Robotics for Next
          Generation, or RNXG, is the greatest platform for working on various
          issue statements and developing the best solutions for them.
        </div>
        <div className="rnxgExplore" data-aos="zoom-out" data-aos-delay="400"><a href="https://www.rnxg.co.in/">Explore</a></div>
      </div>
    </div>
  );
};

export default RNXG;
