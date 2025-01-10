import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination"; // Import Swiper pagination styles
import { Autoplay, Pagination } from "swiper/modules"; // Import Pagination module

import slide1 from "../images/bhai1.jpg";
import slide2 from "../images/bhai2.jpg";
import slide3 from "../images/bhai3.jpg";
import slide4 from "../images/bumblebeebg.png";
import slide5 from "../images/rmageddonlogo.png";

import "../css/HorizontalSlider.css";

const HorizontalSlider = ({ className }) => {
  const images = [slide1, slide2, slide3, slide4, slide5];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={className}>
      <Swiper
        direction="horizontal"
        slidesPerView={3}
        spaceBetween={25}
        loop={true}
        centeredSlides={true}
        pagination={{
          el: ".swiper-pagination", // Selector for the pagination element
          clickable: true,         // Make pagination dots clickable
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Autoplay, Pagination]} // Include Pagination module here
        className="horizontal-swiper"
        breakpoints={{
          900: { slidesPerView: 3 },
          480: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        <div className="imagesSliderContainer">
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className={`hori-slide-custom ${
                activeIndex === index ? "active-slide" : ""
              }`}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </div>
        {/* Add pagination element */}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default HorizontalSlider;
