import React from "react";
import "./FooterBelow.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          
          <p><span>Fund Categories: </span>
            Diversified Equity | ETF | Fund of Funds | Thematic/Sectoral Equity | 
            Equity Linked Savings Scheme ELSS | Hybrid | Solution Oriented | 
            Theme Based Debt | Duration Based Debt | Index | Close Ended
          </p>
          
        </div>

        <div className="footer-section">
        <p>
          <span>Most Searched Funds: </span>
            HDFC Balanced Advantage Fund | HDFC Capital Builder Value Fund | 
            HDFC Children's Gift Fund | HDFC Focused 30 Fund | 
            HDFC Retirement Savings Fund Equity Plan | HDFC Top 100 Fund | 
            <a href="/">View All</a>
          </p>
        </div>

        <div className="footer-section">
          <p><span>Calculators: </span>
            Cost of child education | Goal SIP | Impact of inflation | 
            Present Value | Retirement Calculator | SIP Calculator | 
            STP Calculator | SWAP Calculator | Top up SIP
          </p>
        </div>

        <div className="footer-section">
          <p>
          <span>HDFC Group Websites: </span>
            HDFC Bank | HDFC Securities | HDFC Ergo | HDB Financial Services | 
            HDFC Capital | HDFC Life | HDFC Pension | HDFC Sales | 
            HDFC Parekh Foundation
          </p>
        </div>

        <div className="footer-section">
          <p>
          <span>Info & Disclosures: </span>
            <a href="/">Disclaimer</a> | <a href="/">Privacy Policy</a> | 
            <a href="/">Sitemap</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="disclaimer">
          MUTUAL FUND INVESTMENTS ARE SUBJECT TO MARKET RISKS, READ ALL SCHEME RELATED DOCUMENTS CAREFULLY
        </p>
        <p className="copyright">©Copyright 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
