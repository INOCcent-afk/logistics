import React from "react";
import { Link } from "react-router-dom";
import "./HeroDemo.scss";

function HeroDemo({
  herodemofloat,
  herodemodisplay,
  democontentT,
  democontentP,
  democontentBtn,
  firstHeroDemo,
  secondHeroDemo,
}) {
  return (
    <>
      <div className={`${firstHeroDemo} ${secondHeroDemo}`}>
        <div className="hero-demo-img">
          <div className="hero-demo-img-float">
            <img src={herodemofloat} alt="webp" />
          </div>
          <div className="hero-demo-img-display">
            <img src={herodemodisplay} alt="png" />
          </div>
        </div>
        <div className="hero-demo-content">
          <p>{democontentT}</p>
          <p>{democontentP}</p>
          <button>
            <Link to="/">{democontentBtn}</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default HeroDemo;
