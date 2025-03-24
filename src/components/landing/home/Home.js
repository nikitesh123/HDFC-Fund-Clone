import React from "react";
import "./Home.scss";
import mobImg from "../../img/46262.jpg";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import Corosal1 from "../../img/portfolio/portfolio-1.jpg"
import Corosal2 from "../../img/portfolio/portfolio-2.jpg"
import Corosal3 from "../../img/portfolio/portfolio-3.jpg"

const Home = () => {
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="hdfc-container">
      <div className="hdfc-content">
        <h2>Join 1 Crore + Investors who trust</h2>
        <h1>
          <span className="blue">HDFC</span> <span className="red">Mutual Fund</span>
        </h1>
        <p>Aspiring to build wealth for every Indian</p>
        <div className="buttons">
          <button className="explore">Explore Funds</button>
          <button className="sip">Start a SIP</button>
        </div>
        <div className="stats">
          <div>
            <p>Avg. App Rating</p>
            <span className="rating">4.6 ⭐</span>
          </div>
          <div>
            <p>AUM</p>
            <span>₹ 7.8 Lakh Cr.+</span>
          </div>
          <div>
            <p>Distributors</p>
            <span>85K+</span>
          </div>
        </div>
      </div>

      {/* Image + Carousel Wrapper */}
      <div className="hdfc-image-wrapper">
        {/* Carousel */}
        <div className="carousel">
          <Slider {...carouselSettings}>
            <div><img src={Corosal1} alt="Slide 1" /></div>
            <div><img src={Corosal2} alt="Slide 2" /></div>
            <div><img src={Corosal3} alt="Slide 3" /></div>
          </Slider>
        </div>

        {/* Main Image (Absolutely Positioned) */}
        <div className="hdfc-image">
          <img src={mobImg} alt="HDFC Mutual Fund App" />
        </div>
      </div>
    </div>
  );
};

export default Home;
