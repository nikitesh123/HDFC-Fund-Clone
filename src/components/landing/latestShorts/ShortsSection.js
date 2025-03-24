import React from "react";
import "./ShortsSection.scss";
import img1 from "../../img/team/team-1.jpg";
import img2 from "../../img/team/team-2.jpg";
import img3 from "../../img/team/team-3.jpg";
import img4 from "../../img/team/team-4.jpg";

const shortsData = [
  {
    id: 1,
    image: img1,
    title: "Why HDFC Flexi Cap Fund deserves a spot in your portfolio!",
    number: "30",
  },
  {
    id: 2,
    image: img2,
    title: "Aim to build a bright future from Day One!",
  },
  {
    id: 3,
    image: img3,
    title: "Serving 1.2 crore investors is an honour",
  },
  {
    id: 4,
    image: img4,
    title: "Atmanirbhar India!",
  },
];

const ShortsSection = () => {
  return (
    <div className="shorts-section">
      <h2 className="title">Latest Shorts</h2>
          {/* <a href="/" className="view-all">View all →</a> */}
      <div className="shorts-container">
        {shortsData.map((short) => (
          <div key={short.id} className="short-card">
            <img src={short.image} alt="Short" className="short-image" />
            {short.number && <span className="short-number">{short.number}</span>}
            <p className="short-title">{short.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortsSection;
