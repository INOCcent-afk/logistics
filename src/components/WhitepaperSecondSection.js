import React from "react";
import "./WhitepaperSecondSection.scss";
import lpCover from "./images/lp-cover-capturing-mobile-workforce.png";

function WhitepaperSecondSection() {
  return (
    <>
      <div className="whitepaper-second-section">
        <div className="whitepaper-second-section-content">
          <div className="whitepaper-second-section-content-title">
            <p>VoIP Industry Best Practices</p>
            <p>
              Gain fundamental knowledge for running a successful white label
              VoIP business
            </p>
          </div>
          <div className="whitepaper-second-section-content-p">
            <p>
              We, at Logistics, always share our rich VoIP knowledge base with
              partners and other industry professionals. White papers is a great
              resource for white label resellers, MSPs and other technology
              business owners that want to expand into VoIP / UCaaS and grow
              their business at a staggering rate. View, download and apply this
              knowledge!
            </p>
          </div>
          <div className="whitepaper-second-section-content-links">
            <div className="whitepaper-second-section-content-links-title">
              <p>Featured White Papers:</p>
            </div>
            <div className="whitepaper-second-section-content-links-link">
              <li>
                <a href="#">Disruptive Pricing Strategies for the SMB Market</a>
              </li>
              <li>
                <a href="#">
                  Selling UCaaS - Marketing Best Practices for MSPs
                </a>
              </li>
              <li>
                <a href="#">Capturing the Mobile Workforce with UC</a>
              </li>
              <li>
                <a href="#">
                  5 Signs It's Time to Upgrade Your Business Communications
                </a>
              </li>
            </div>
          </div>
        </div>
        <div className="whitepaper-second-section-img">
          <img src={lpCover} alt="png" />
        </div>
      </div>
    </>
  );
}

export default WhitepaperSecondSection;
