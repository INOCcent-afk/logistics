import React from "react";
import Hero from "../Hero";
import Vendor from "../Vendor";
import HeroDemo from "../HeroDemo";
import Image85 from "../images/Image-85.webp";
import Image86 from "../images/Image-86.webp";
import Image87 from "../images/Image-87.webp";
import Image88 from "../images/Image-88.webp";
import floatBg from "../images/Path-1298.webp";
import displayImg from "../images/Group-1829@2x-5.webp";
import SecondDisplayImg from "../images/Group-1843-1.webp";
import HiddenImage from "../images/bg_home.png";
import HeroDisplayImage from "../images/Group-1842@2x-3.webp";
function Home() {
  return (
    <>
      <Hero
        heroDisplayImage={HeroDisplayImage}
        hiddenImage={HiddenImage}
        heroH1="White Label VoIP Platform"
        heroP="Logistics offers a white label VoIP platform that enables Partners
            to sell, provision, invoice, and support their own branded VoIP and
            UCaaS services."
        heroBtn="Schedule a Demo"
      />
      <Vendor
        title="Ditch vendor management
and become the vendor"
        p="Why install and support a system you can’t fully control at low margins? Partner with RingLogix instead and own the entire customer experience at 70% margins or higher. You can quote, invoice, install, and support a VoIP offering in minutes without any technical resources."
        img85={Image85}
        img86={Image86}
        img87={Image87}
        img88={Image88}
        img85p="Hosted PBX"
        img86p="Hosted Call Center"
        img87p="Fax over IP"
        img88p="SIP Trunking"
      />
      <HeroDemo
        firstHeroDemo="first-hero-demo"
        herodemofloat={floatBg}
        herodemodisplay={displayImg}
        democontentT="Support Customers with Complete Visibility"
        democontentP=" Our easy-to-use web portal allows you to manage and add new
            customers in real-time with hassle-free number porting. Call quality
            monitoring gives you the visibility you need to provide the support
            your customers expect."
        democontentBtn="Schedule a Demo"
      />
      <HeroDemo
        secondHeroDemo="second-hero-demo"
        herodemofloat=""
        herodemodisplay={SecondDisplayImg}
        democontentT="Work with the brands
       you already love"
        democontentP="
    There is no need to buy more hardware.
    Logistics is vendor agnostic.
    Install your new solution and use the equipment
    you and your customers already own."
        democontentBtn="See how"
        imgClass=""
      />
    </>
  );
}

export default Home;
