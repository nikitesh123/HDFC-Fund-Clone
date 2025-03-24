import React from "react";
import "./InvestmentPlanner.scss";

const InvestmentPlanner = () => {
  const investmentOptions = [
    { icon: "🏡", title: "My Home" },
    { icon: "📈", title: "Wealth Creation" },
    { icon: "🎓", title: "Children & Education" },
    { icon: "💰", title: "Emergency Corpus" },
    { icon: "🧾", title: "Tax Planning" },
    { icon: "✈️", title: "Travel" },
    { icon: "🏖️", title: "Retirement" },
    { icon: "💵", title: "Regular Income" },
  ];

  return (
    <div className="investment-planner">
      <h2>Invest Smart. Plan Now.</h2>
      <p>
        Plan your goals, understand your investment personality, and get a curated list of funds that match your needs.
      </p>

      <div className="buttons">
        <button className="primary">📊 Plan Your Goals</button>
        <button className="secondary">💹 Know Your Investment Personality</button>
      </div>

      <div className="investment-grid">
        {investmentOptions.map((item, index) => (
          <div className="investment-card" key={index}>
            <span className="icon">{item.icon}</span>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InvestmentPlanner;
