import React, { useState } from "react";
import { FaBell, FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.scss";
import logo from "../../img/hdfc_lofo.png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Left Section - Logo */}
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />

        {/* Navbar Menu */}
        <ul className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="dropdown">
            About Us
            <div className="dropdown-menu">
              <a href="/">HDFC MF at a Glance</a>
              <a href="/">Corporate Social Responsibility</a>
              <a href="/">What we stand for</a>
              <a href="/">What Sets Us Apart</a>
              <a href="/">Environmental, Social and Governance</a>
            </div>
          </li>

          <li className="dropdown">
            Product & Solutions
            <div className="dropdown-menu">
              <a href="/">Mutual Funds</a>
              <a href="/">Investment Plans</a>
              <a href="/">Tax Saving Plans</a>
            </div>
          </li>

          <li className="dropdown">
            Learner's Corner
            <div className="dropdown-menu">
              <a href="/">Basics of Investing</a>
              <a href="/">Mutual Fund Glossary</a>
              <a href="/">Learning Videos</a>
            </div>
          </li>

          <li className="dropdown">
            Knowledge Stack
            <div className="dropdown-menu">
              <a href="/">Market Insights</a>
              <a href="/">Investor Education</a>
            </div>
          </li>

          <li className="dropdown">
            Investor Services
            <div className="dropdown-menu">
              <a href="/">Account Statements</a>
              <a href="/">Transaction Updates</a>
              <a href="/">Investor Help</a>
            </div>
          </li>

          <li className="dropdown">
            Distributor Corner
            <div className="dropdown-menu">
              <a href="/">Partner with Us</a>
              <a href="/">Business Tools</a>
            </div>
          </li>
        </ul>
      </div>

      {/* Right Section - Icons, Buttons, and Toggler */}
      <div className="navbar-right">
        <FaBell className="icon" />
        <FaSearch className="icon" />
        <FaShoppingCart className="icon" />
        <button className="btn btn-outline-primary">Login</button>
        <button className="btn btn-primary">New Investor</button>

        {/* Mobile Toggler Button */}
        <button className="navbar-toggler" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
