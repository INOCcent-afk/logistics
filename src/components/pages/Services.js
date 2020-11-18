import React from "react";
import Hero from "../Hero";
import HeroDemo from "../HeroDemo";
import HiddenImage from "../images/bg_home.png";
import HeroDisplayImage from "../images/Group-1845@2x.png";
import FloatBg from "../images/Path-1298.webp";
import FirstDisplayImg from "../images/download.svg";
import SecondDisplayImg from "../images/download (1).svg";
import ThirdDisplayImg from "../images/download (2).svg";
import FourthDisplayImg from "../images/download (3).svg";
import FifthDisplayImg from "../images/download (4).svg";
import SixthDisplayImg from "../images/download (1).svg";
import SeventhDisplayImg from "../images/download (5).svg";

function Services() {
  return (
    <>
      <Hero
        heroDisplayImage={HeroDisplayImage}
        hiddenImage={HiddenImage}
        heroH1="Sell the Services
Your Customers Want"
        heroP="Build your brand's value and relationships by providing delivering cloud communications with Logistics white label VoIP platform."
        heroBtn="Schedule a Demo"
      />
      <HeroDemo
        secondHeroDemo="second-hero-demo"
        herodemofloat={FloatBg}
        herodemodisplay={FirstDisplayImg}
        democontentT="SIP Trunking"
        democontentP="Support any customer and enhance their service with features like Never Busy™ Call Bursting and Always On™ Inbound Calling. Compatible with all:
        IP-PBX’s"
        democontentBtn="Learn More"
      />
      <HeroDemo
        firstHeroDemo="first-hero-demo"
        herodemofloat={FloatBg}
        herodemodisplay={SecondDisplayImg}
        democontentT="Hosted PBX"
        democontentP="
        Scalable, Flexible, Powerful. Our white label Hosted PBX solution is packed with features and benefits that hosted PBX resellers need to succeed. The Logistics Hosted PBX platform is truly geo-redundant and compatible with all major IP Phone brands."
        democontentBtn="Take a Test Drive"
        imgClass=""
      />
      <HeroDemo
        secondHeroDemo="second-hero-demo"
        herodemofloat={FloatBg}
        herodemodisplay={ThirdDisplayImg}
        democontentT="Hosted Call Center"
        democontentP="Offer an excellent customer experience with intelligent call routing, multiple CRM integrations, advanced reporting, and no significant hardware investment."
        democontentBtn="Learn More"
      />
      <HeroDemo
        firstHeroDemo="first-hero-demo"
        herodemofloat={FloatBg}
        herodemodisplay={FourthDisplayImg}
        democontentT="Activate Any
        Service On-Demand"
        democontentP="
         Create customers and activate services in just minutes. Or use the Quote Activation feature to automate the entire process."
        democontentBtn="See how"
        imgClass=""
      />
      <HeroDemo
        secondHeroDemo="second-hero-demo"
        herodemofloat={FloatBg}
        herodemodisplay={FifthDisplayImg}
        democontentT="Create & Send Sales Quotes"
        democontentP="Increase sales and track productivity with our integrated white label quote tool. Plus, streamline order taking by enabling your customers to accept quotes and signup online. All under YOUR brand."
        democontentBtn="Learn More"
      />
      <HeroDemo
        firstHeroDemo="first-hero-demo"
        herodemofloat={FloatBg}
        herodemodisplay={SixthDisplayImg}
        democontentT="Activate Any
        Service On-Demand"
        democontentP="
         Create customers and activate services in just minutes. Or use the Quote Activation feature to automate the entire process."
        democontentBtn="See how"
        imgClass=""
      />
      <HeroDemo
        secondHeroDemo="second-hero-demo"
        herodemofloat={FloatBg}
        herodemodisplay={SeventhDisplayImg}
        democontentT="Create & Send Sales Quotes"
        democontentP="Increase sales and track productivity with our integrated white label quote tool. Plus, streamline order taking by enabling your customers to accept quotes and signup online. All under YOUR brand."
        democontentBtn="Learn More"
      />
    </>
  );
}

export default Services;
