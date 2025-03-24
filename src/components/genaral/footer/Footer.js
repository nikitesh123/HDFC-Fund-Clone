import React, { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaPlus, FaMinus, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const sections = [
    { title: "IMPORTANT LINKS", items: ["PMS/AIF (Login)", "Statutory Disclosures", "Contact Us", "Careers", "ODR Portal"] },
    { title: "INVESTORS", items: ["Total Expense Ratio", "NAV and IDCW", "FAQ's", "Market Updates"] },
    { title: "DOWNLOADS", items: ["Forms", "Product Information", "Factsheet"] },
    { title: "DISTRIBUTORS", items: ["Log In", "Become an MFD", "Forms & Disclosures"] },
  ];

  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="top-section">
        <div className="mission-vision">
          <div className="mission">Mission: To be the wealth creator for every Indian</div>
          <div className="vision">Vision: To be the most respected asset manager in the world</div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        {/*  Desktop & Tablet View: Links in a Row */}
        {!isMobile && (
          <div className="links-section">
            {sections.map((section, index) => (
              <div key={index} className="column">
                <h3>{section.title}</h3>
                <ul>
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/*  Mobile View: Dropdown Links */}
        {isMobile && (
          <div className="dropdown-links">
            {sections.map((section, index) => (
              <div key={index} className="dropdown">
                <div className="dropdown-header" onClick={() => toggleDropdown(index)}>
                  <h3>{section.title}</h3>
                  {openDropdown === index ? <FaMinus className="icon" /> : <FaPlus className="icon" />}
                </div>
                <ul className={`dropdown-content ${openDropdown === index ? "open" : ""}`}>
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/*  Contact & Follow Us */}
        <div className="contact-follow-section">
          {/*  Contact Icons Only */}
          <div className="contact-info">
            <h3>Contact Us</h3>
            <div className="icons">
              <a href="tel:+912212345678" target="_blank" rel="noopener noreferrer"><FaPhone className="icon" /></a>
              <a href="mailto:support@hdfcmf.com" target="_blank" rel="noopener noreferrer"><FaEnvelope className="icon" /></a>
              <a href="https://wa.me/912212345678" target="_blank" rel="noopener noreferrer"><FaWhatsapp className="icon" /></a>
              <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer"><FaMapMarkerAlt className="icon" /></a>
            </div>
          </div>

          {/*  Social Media Icons */}
          <div className="social-media">
            <h3>Follow Us</h3>
            <div className="icons">
              <FaFacebookF className="icon" />
              <FaTwitter className="icon" />
              <FaLinkedinIn className="icon" />
              <FaInstagram className="icon" />
              <FaYoutube className="icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
