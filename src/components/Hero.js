import React from "react";
import "./Hero.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero(props) {
  return (
    <>
      <div className="hero">
        <div className="hero-floating-img">
          <img
            src="https://cdn2.hubspot.net/hubfs/5715461/Ring_Logix_May2019%20Theme/Images/hero-blob.svg"
            alt="svg"
          />
        </div>
        <div className="hero-hidden-img">
          <img src={props.hiddenImage} alt="bg" />
        </div>
        <div className="hero-content">
          <h1>{props.heroH1}</h1>
          <p>{props.heroP}</p>
          <button>
            <AnchorLink href="#jump-form">{props.heroBtn}</AnchorLink>
          </button>
        </div>
        <div className="hero-img">
          <img src={props.heroDisplayImage} alt="webp" />
        </div>
      </div>
    </>
  );
}

export default Hero;
