import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./LatestPost.scss";
import img1 from "../../img/portfolio/portfolio-1.jpg";
import img2 from "../../img/portfolio/portfolio-2.jpg";
import img3 from "../../img/portfolio/portfolio-3.jpg";
import img4 from "../../img/portfolio/portfolio-4.jpg";

const posts = [
  {
    img: img1,
    title: "HDFC MF - Yearbook 2025",
    description: "Our Annual Yearbook 2025 gives you a nuanced view of how the Indian economy is positioned...",
    tag: "Blog",
  },
  {
    img: img2,
    title: "The rise and rise of gold - What to do...",
    description: "Gold prices have been rising steadily in recent months, reaching new highs with minimal corrections...",
    tag: "Blog",
  },
  {
    img: img3,
    title: "India Semiconductor Mission...",
    description: "India could start manufacturing its own semiconductor chips starting in the second half of 2025...",
    tag: "Blog",
  },
  {
    img: img4,
    title: "New Financial Report 2025",
    description: "A detailed look at the trends shaping the financial landscape in 2025...",
    tag: "Report",
  },
];

const LatestPost = () => {
  const swiperRef = useRef(null);

  return (
    <div className="out-coursel">
    <div className="carousels-container">
      <h2 className="latest-posts">Latest Posts</h2>

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
          navigation
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <div className="card-image">
                  <img src={post.img} alt={post.title} />
                  <span className="tag">{post.tag}</span>
                </div>
                <div className="card-content">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
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

export default LatestPost;
