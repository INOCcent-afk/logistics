import React from "react";
import "./ResellerHero.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image58 from "./images/Image-58.png";

function ResellerHero() {
  return (
    <>
      <div className="reseller-hero">
        <div className="reseller-hero-floating-img">
          <img
            src="https://cdn2.hubspot.net/hubfs/5715461/Ring_Logix_May2019%20Theme/Images/hero-blob.svg"
            alt="svg"
          />
        </div>
        <div className="reseller-hero-title">
          <p>LogicOS: Everything You Need to Run a VoIP Business</p>
          <p>
            All delivered unde <span>YOUR BRAND</span>
          </p>

          <button>
            <AnchorLink href="#jump-form">Schedule Demo</AnchorLink>
          </button>
        </div>
        <div className="reseller-hero-img">
          <img src={Image58} alt="png" />
        </div>
      </div>
    </>
  );
}

export default ResellerHero;
