import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination"; // Import Swiper pagination styles
import { Autoplay, Pagination } from "swiper/modules";

import slide1 from "../images/bhai1.jpg";
import slide2 from "../images/bhai2.jpg";
import slide3 from "../images/bhai3.jpg";
import slide4 from "../images/Glimpses4.JPG";
import slide5 from "../images/Glimpses5.JPG";

import "../css/VerticalImageSlider.css";

const VerticalImageSlider = ({ className }) => {
  const images = [slide1, slide2, slide3, slide4, slide5];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={className}>
      <Swiper
        direction="vertical" // Default direction is vertical
        slidesPerView={3}
        spaceBetween={15}
        loop={true}
        centeredSlides={true}
        pagination={{
          el: ".swiper-pagination", // Selector for pagination
          clickable: true,          // Make pagination dots clickable
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Autoplay, Pagination]} // Include Pagination module
        className="vertical-swiper"
        breakpoints={{
          900: {
            direction: "vertical",
            slidesPerView: 3,
          },
          600: {
            direction: "horizontal",
            slidesPerView: 2,
          },
          0: {
            direction: "horizontal",
            slidesPerView: 1, // Horizontal direction for small screens
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className={`swiper-slide-custom ${
              activeIndex === index ? "active-slide" : ""
            }`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
        {/* Pagination element */}
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default VerticalImageSlider;
