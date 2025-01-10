import React, { useEffect } from "react";
import "../css/Accomodation.css"
import NavBar from './NavBar'
import Footer from './Footer'
import AOS from "aos";
import "aos/dist/aos.css";

const Accommodation = ({ className }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
    <div className='Accommodation'>
        <div className='AccomodationNavBar'>
            <NavBar className="AccomodationNavBar" data-aos="fade-down"/>
        </div>
      <h1 className='h1class' data-aos="fade-right">Coming Soon....</h1>
    </div>
    <Footer />
    </>
  )
}

export default Accommodation
