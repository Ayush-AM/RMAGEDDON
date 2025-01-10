import React, { useEffect } from "react";
import "../css/Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = ({ className }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <footer>
      <div className="contentaboveline">
        
        <div className="social-media" data-aos="fade-up" data-aos-delay="400">
          <a
            href="https://www.facebook.com/rnxgsggs"
            target="_blank"
            className="social-link-2"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/team_rnxg/"
            target="_blank"
            className="social-link-2"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.youtube.com/channel/UC9fFrYx9UEpxDjS9YO6t2FA"
            target="_blank"
            className="social-link-2"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/rnxg/"
            target="_blank"
            className="social-link-2"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className="footer-title-container">
          <h1 className="footer-title" data-aos="fade-right" data-aos-delay="300">
            RNXG
          </h1>
          <p className="footer-text" data-aos="fade-right" data-aos-delay="300">
            Robotics for Next Generation provides the best platform to work on
            different problem statements and to create the best solutions for
            them.
          </p>
        </div>
      </div>
      <div className="includinglinecontent">
        <hr className="footer-divider" data-aos="fade-up"/>
        <div className="contentbelowhr" data-aos="fade-right" data-aos-delay="400">
          <div className="belowlinleftside">
            <p className="footer-copyright" >
              Copyright Ⓒ 2025 RNXG. All Rights Reserved.
            </p>
            <p className="footer-copyright" >Design and Develop by Team RnXg</p>
          </div>
          <div className="belowlinerightside">
            <a href="https://mail.google.com/mail/u/0/?fs=1&to=info@rmageddon.tech&tf=cm"  >info@rmageddon.tech</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
