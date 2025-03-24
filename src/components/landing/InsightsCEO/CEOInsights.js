import React from "react";
import "./CEOInsights.scss";
import img1 from '../../img/team/team-1.jpg'
import img2 from '../../img/team/team-2.jpg'
import img3 from '../../img/team/team-3.jpg'
import img4 from '../../img/team/team-4.jpg'

const CEOInsights = () => {
  const insights = [
    {
      title: "Person of the Year 2024 Happy !",
      category: "Articles",
      image: img1,
    },
    {
      title: "Muhurat Investing wali Diwali",
      category: "Videos",
      image: img2,
    },
    {
      title: "Path towards structural reforms",
      category: "Interviews",
      image: img3,
    },
    {
      title: "Address by Mr. Navneet Munot ",
      category: "Media Interactions",
      image: img4,
    },
  ];

  return (
    <div className="ceo-insights">
      <h2>Insights From our MD & CEO</h2>
      <div className="profile">
        <img src={img3} alt="Navneet Munot" />
        <div>
          <h3>Navneet Munot</h3>
          <p>Managing Director and Chief Executive Officer</p>
        </div>
      </div>
        {/* <a href="/" className="view-all">View all →</a> */}
      <div className="insights-list">
        {insights.map((item, index) => (
          <div key={index} className="insight-card">
            <img src={item.image} alt={item.title} />
            <span className="category">{item.category}</span>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CEOInsights;
