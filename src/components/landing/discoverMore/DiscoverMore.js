import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Removed Navigation
import "swiper/css";
import "swiper/css/pagination";
import "./DiscoverMore.scss";

import img1 from '../../img/DiscoverMore/img2.webp';
import img2 from '../../img/DiscoverMore/img1.jpg';
import img3 from '../../img/DiscoverMore/img3.webp';

const slides = [
  { img: img1, buttonText: "Register Now", link: "#" },
  { img: img2, buttonText: "Learn More", link: "#" },
  { img: img3, buttonText: "Sign Up", link: "#" },
];

const DiscoverMore = () => {
  return (
    <div className="carousel-container">
      <h2 className="title">Discover More</h2>

      <Swiper
        modules={[Pagination, Autoplay]}  // Removed Navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={slide.img} alt={`Slide ${index + 1}`} />
              <a href={slide.link} className="carousel-btn">{slide.buttonText}</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DiscoverMore;
