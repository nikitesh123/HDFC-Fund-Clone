import React, { useState } from "react";
import "./Investments.scss";
import qrWebsite from "../../img/portfolio/portfolio-8.jpg";
import qrApp from "../../img/portfolio/portfolio-9.jpg";
import qrCall from "../../img/portfolio/portfolio-6.jpg";

const Investments = () => {
  const [activeTab, setActiveTab] = useState("website"); 
  const [qrImage, setQrImage] = useState(qrWebsite); 

  const handleHover = (tab, image) => {
    setActiveTab(tab);
    setQrImage(image);
  };

  return (
    <div className="investments-container">
      <div className="investment-card">
        <h2>Manage Investments Online</h2>
        <p>Four ways to invest with us</p>

        <div className="investment-content">
          {/* Left Section - Options */}
          <div className="left-section">
            {/* Website */}
            <div
              className="hover-section"
              onMouseEnter={() => handleHover("website", qrWebsite)}
            >
              <h3>Website</h3>
              {activeTab === "website" && (
                <div className="info-card">
                  <h4>Website</h4>
                  <p>
                    Invest online with our secure and easy-to-use website. Track investments, set goals, and manage funds from anywhere.
                  </p>
                  <button>Visit Website</button>
                </div>
              )}
            </div>

            {/* App */}
            <div
              className="hover-section"
              onMouseEnter={() => handleHover("app", qrApp)}
            >
              <h3>App</h3>
              {activeTab === "app" && (
                <div className="info-card">
                  <h4>App</h4>
                  <p>
                    Want to invest on the go? With the HDFC MFOnline Investor App, enjoy secure transactions with biometric authentication and access online services like E-KYC, statement downloads.
                  </p>
                  <button>Download Now</button>
                </div>
              )}
            </div>

            {/* Call */}
            <div
              className="hover-section"
              onMouseEnter={() => handleHover("call", qrCall)}
            >
              <h3>Call</h3>
              {activeTab === "call" && (
                <div className="info-card">
                  <h4>Call Support</h4>
                  <p>
                    Speak with our financial advisors for expert guidance on investments. Call us anytime for assistance.
                  </p>
                  <button>Call Now</button>
                </div>
              )}
            </div>
          </div>

          {/* Right Section - QR Code */}
          <div class="right-section">
            <div class="qr-card">
            </div>
              <img src={qrImage} alt="QR Code"/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Investments;
