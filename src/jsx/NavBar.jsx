import React, { useState, useEffect, useRef } from "react";
import "../css/NavBar.css";
import RNXG from "../images/RNXGlogo.png";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const NavBar = ({ className }) => {
  const [menuClickedorNot, setMenuClickedorNot] = useState(false);
  const [navBarHeight, setNavBarHeight] = useState(0); // State to store navBar height
  const navbarResize = useRef(null);

  const handleMenuClick = () => {
    setMenuClickedorNot(!menuClickedorNot);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    // Set the height of navBar
    if (navbarResize.current) {
      setNavBarHeight(navbarResize.current.offsetHeight);
    }

    // Update height on resize
    const handleResize = () => {
      if (navbarResize.current) {
        setNavBarHeight(navbarResize.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`${className} navBar`}
        ref={navbarResize}
        data-aos="fade-down"
        data-aos-delay="800"
        style={{
          background: menuClickedorNot
            ? "linear-gradient(to right, transparent 5%, hsla(0, 0%, 0%, 0.9) 80%)"
            : "transparent",
        }}
      >
        <div className="navRnxgLogo">
          <a href="https://www.rnxg.co.in/" target="_blank">
            <img src={RNXG} alt="RNXG Logo" className="logoRNXG"  />
          </a>
        </div>
        <div className="navLinks">
          <NavLink to="/" className="navLink">
            Home
          </NavLink>
          <NavLink to="/event" className="navLink">
            Event
          </NavLink>
          <NavLink to="/accomodation" className="navLink">
            Accommodation
          </NavLink>
          <NavLink to="/contact" className="navLink">
            Contact Us
          </NavLink>
        </div>
        <div className="navMenu" onClick={handleMenuClick}>
          <div className={`toggle ${menuClickedorNot ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {menuClickedorNot && (
        <div
          className="navMenuOpen"
          style={{
            top: `${navBarHeight}px`, // Dynamically set top based on navBar height
          }}
        >
          <NavLink to="/" className="navMenuLink" onClick={handleMenuClick}>
            Home
          </NavLink>
          <NavLink
            to="/event"
            className="navMenuLink"
            onClick={handleMenuClick}
          >
            Event
          </NavLink>
          <NavLink
            to="/accomodation"
            className="navMenuLink"
            onClick={handleMenuClick}
          >
            Accommodation
          </NavLink>
          <NavLink
            to="/contact"
            className="navMenuLink"
            onClick={handleMenuClick}
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </>
  );
};

export default NavBar;
