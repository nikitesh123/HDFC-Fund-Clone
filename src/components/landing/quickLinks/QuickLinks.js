import React from "react";
import "./QuickLinks.scss";

const quickLinks = [
  { icon: "📢", text: "Regulatory Announcements" },
  { icon: "⚙️", text: "Update KYC" },
  { icon: "📝", text: "Sign Up" },
  { icon: "🧮", text: "Calculate SIP" },
  { icon: "✔️", text: "Check KYC status" },
  { icon: "📊", text: "Check NAV & IDCW" },
  { icon: "📥", text: "Download A/C statements" },
  { icon: "💰", text: "View Total Expense Ratio (TER)" },
];

const QuickLinks = () => {
  return (
    <div className="quick-links-container">
      <h2>Quick Links</h2>
      <div className="quick-links-grid">
        {quickLinks.map((link, index) => (
          <div key={index} className="quick-link-card">
            <span className="icon">{link.icon}</span>
            <p>{link.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;