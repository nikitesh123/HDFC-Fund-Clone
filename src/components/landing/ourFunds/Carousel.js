import React, { useRef,useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.scss";

const Carousel = () => {

  const cards = [
    { name: "HDFC Flexi Cap Fund", cagr: "16.98%", benchmark: "14.53%", nav: "1933.47", risk: "Very High Risk" },
    { name: "HDFC Large Cap Fund", cagr: "14.38%", benchmark: "13.71%", nav: "1118.68", risk: "Very High Risk" },
    { name: "HDFC Asset Allocator Fund ", cagr: "16.46%", benchmark: "12.46%", nav: "17.56", risk: "High Risk" },
    { name: "HDFC Equity Savings Fund", cagr: "12.30%", benchmark: "10.80%", nav: "55.45", risk: "Moderate Risk" },
    { name: "HDFC Flexi Cap Fund", cagr: "16.98%", benchmark: "14.53%", nav: "1933.47", risk: "Very High Risk" },
    { name: "HDFC Large Cap Fund", cagr: "14.38%", benchmark: "13.71%", nav: "1118.68", risk: "Very High Risk" },
    { name: "HDFC Asset Allocator Fund ", cagr: "16.46%", benchmark: "12.46%", nav: "17.56", risk: "High Risk" },
    { name: "HDFC Equity Savings Fund", cagr: "12.30%", benchmark: "10.80%", nav: "55.45", risk: "Moderate Risk" }
  ];

  const [selectedPeriod, setSelectedPeriod] = useState(Array(cards.length).fill("Since Inception"));

  const handlePeriodSelect = (cardIndex, period) => {
    const newSelection = [...selectedPeriod];
    newSelection[cardIndex] = period;
    setSelectedPeriod(newSelection);
  };
  const swiperRef = useRef(null);

  return (
    <div className="out-coursel">
      <div className="carousels-container">
        <h2 className="our-funds">Our Funds</h2>

        <div className="carousel-wrapper">
          {/* Left Navigation Button */}
          <button
            className="nav-btn left"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            &#10094;
          </button>

          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true} // Centers the active slide
            centeredSlidesBounds={true} // Ensures slides stay in bounds
            navigation
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Navigation]}
          >
            {cards.map((card, i) => (
              <SwiperSlide key={i} className="p-4">
                <div className="fund-card">
                <h3>{card.name}</h3>
                <div className="return-buttons">
                  {["1 year", "3 years", "5 years", "10 years", "Since Inception"].map((period) => (
                    <button
                      key={period}
                      className={`period-btn ${selectedPeriod[i] === period ? "active" : ""}`}
                      onClick={() => handlePeriodSelect(i, period)}
                    >
                      {period}
                    </button>
                  ))}
                </div>
                <div className="card-details">
                  <p><strong>CAGR:</strong> {card.cagr}</p>
                  <p><strong>Benchmark:</strong> {card.benchmark}</p>
                  <p><strong>NAV:</strong> {card.nav}</p>
                  <p><strong>Risk:</strong> {card.risk}</p>
                </div>
                <div className="suggested-row">
                  <button className="know-more-btn">Know More</button>
                  <button className="invest-now-btn">Invest Now</button>
                </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right Navigation Button */}
          <button
            className="nav-btn right"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
