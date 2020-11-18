import React from "react";
import "./WhitepaperFirstSection.scss";
import WhitepaperIcon from "./images/whitepaper-icon.png";
import Screen from "./images/managed-service-screen.png";
import bg from "./images/bg_home.png";

function WhitepaperFirstSection() {
  return (
    <>
      <div className="whitepaper-first-section">
        <div className="whitepaper-first-section-floating-img">
          <img
            src="https://cdn2.hubspot.net/hubfs/5715461/Ring_Logix_May2019%20Theme/Images/hero-blob.svg"
            alt="svg"
          />
        </div>
        <div className="whitepaper-first-section-display-img">
          <img src={bg} alt="png" />
        </div>
        <div className="whitepaper-first-section-Fsect">
          <img src={WhitepaperIcon} alt="png" />
          <h1>White Papers</h1>
          <p>VoIP Industry Knowledge, Shared</p>
        </div>
        <div className="whitepaper-first-section-Ssect">
          <img src={Screen} alt="png" />
        </div>
      </div>
    </>
  );
}

export default WhitepaperFirstSection;
