import React, { useEffect } from "react";
import "../css/Contact.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Coordinator2 from "../images/Roborace.jpg";
import Coordinator3 from "../images/drone.jpg";
import Coordinator4 from "../images/LineFollower.webp";
import Coordinator5 from "../images/soccer.jpg";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = ({ className }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      <NavBar className={"contactNavbar"} />
      <hr />
      <div className="box1">
        <h1 className="contact-title" data-aos="fade-down">CONTACT US</h1>
        <div className="container">
          <div className="Cont_Card" data-aos="fade-right">
            <img
              src={"https://res.cloudinary.com/dupeml4xm/image/upload/v1736309153/Nikhilesh_D_qzojpp.jpg"}
              alt="Nikhilesh Deshmukh"
              className="Cont_Card__image"
            />
            <h1 className="Cont_Card__name">Nikhilesh Deshmukh</h1>
            <p>RNXG Coordinator</p>
            <ul className="social-icons">
              <li>
                <a href="https://www.instagram.com/deshmukh_nikhilesh?igsh=dHQ1cGtxdGdjdW5v" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nikhileshdeshmukh/" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=919518549485" target="_blank">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="Cont_Card" data-aos="fade-left">
            <img
              src={Coordinator2}
              alt="Shantanu Pande"
              className="Cont_Card__image"
            />
            <h1 className="Cont_Card__name">Shantanu Pande</h1>
            <p>RNXG Vice Coordinator</p>
            <ul className="social-icons">
              <li>
                <a href="https://www.instagram.com/shantanu_pande?igsh=c2xscnJ2cTcwN2x5" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shantanupande/" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=917841983794" target="_blank">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="Cont_Card" data-aos="fade-right">
            <img
              src={Coordinator3}
              alt="Devansh Juwar"
              className="Cont_Card__image"
            />
            <h1 className="Cont_Card__name">Devansh Juwar</h1>
            <p>Event Coordinator</p>
            <ul className="social-icons">
              <li>
                <a href="https://www.instagram.com/kindof_devansh?igsh=bmhqN3gyNTZiZ3Nn" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/devansh-juwar-0453a425a/" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=919067644804" target="_blank">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="Cont_Card" data-aos="fade-left">
            <img
              src={Coordinator4}
              alt="Samyak Borkar"
              className="Cont_Card__image"
            />
            <h1 className="Cont_Card__name">Samyak Borkar</h1>
            <p>Event Coordinator</p>
            <ul className="social-icons">
              <li>
                <a href="https://www.instagram.com/samyak_borkar__?igsh=eG5zdTVkNHRocmZ3" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/samyak-borkar-2a150528a/" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=919604450984" target="_blank">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="Cont_Card" data-aos="fade-up">
            <img
              src={Coordinator5}
              alt="Vaishnavi Poul"
              className="Cont_Card__image"
            />
            <h1 className="Cont_Card__name">Vaishnavi Poul</h1>
            <p>PRC Manager</p>
            <ul className="social-icons">
              {/* <li>
                <a href="https://www.instagram.com/vaishnavi" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
              </li> */}
              <li>
                <a href="https://www.linkedin.com/in/vaishnavi-poul/" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send?phone=919011469945" target="_blank">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Footer">
      <Footer />
      </div>
    </div>
  );
};

export default Contact;