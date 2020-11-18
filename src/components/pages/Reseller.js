import React from "react";
import ResellerHero from "../ResellerHero";
import HeroDemo from "../HeroDemo";
import FloatBg from "../images/Path-1298.webp";
import FirstDisplayImg from "../images/Group-1844@2x-1.png";
import SecondDisplayImg from "../images/Group-1845@2x-1.png";
import ThirdDisplayImg from "../images/Group-1842@2x-1.png";
import FourthDisplayImg from "../images/Group-1847@2x.png";
import FifthDisplayImg from "../images/Group-1843@2x-3.png";

function Reseller() {
  return (
    <>
      <ResellerHero />
      <HeroDemo
        firstHeroDemo="first-hero-demo"
        herodemofloat={FloatBg}
        herodemodisplay={FirstDisplayImg}
        democontentT="Create & Send Sales Quotes"
        democontentP="Increase sales and track productivity with our integrated white label quote tool. Plus, streamline order taking by enabling your customers to accept quotes and signup online. All under YOUR brand."
        democontentBtn="Learn More"
      />
      <HeroDemo
        secondHeroDemo="second-hero-demo"
        herodemofloat={FloatBg}
        herodemodisplay={SecondDisplayImg}
        democontentT="Activate Any
        Service On-Demand"
        democontentP="
         Create customers and activate services in just minutes. Or use the Quote Activation feature to automate the entire process."
        democontentBtn="See how"
        imgClass=""
      />
      <HeroDemo
        firstHeroDemo="first-hero-demo"
        herodemofloat={FloatBg}
        herodemodisplay={ThirdDisplayImg}
        democontentT="Order & Port Phone Numbers"
        democontentP="Instantly order local and toll-free phone numbers in all 50 states. Or port existing numbers using our automated wizard with no messy paperwork and real-time updates."
        democontentBtn="Sechedule a Demo"
      />
      <HeroDemo
        secondHeroDemo="second-hero-demo"
        herodemofloat={FloatBg}
        herodemodisplay={FourthDisplayImg}
        democontentT="Integrated &
        Automated Billing"
        democontentP="
         Use our simple and automated
         billing system to Charge monthly subscriptions Bill long distance calls Calculate VoIP taxes Deliver pdf invoices Auto suspend for non-payment"
        democontentBtn="See how"
        imgClass=""
      />
      <HeroDemo
        firstHeroDemo="first-hero-demo"
        herodemofloat={FloatBg}
        herodemodisplay={FifthDisplayImg}
        democontentT="Logical Partner Support"
        democontentP="Clear reason-based troubleshooting with transparent call traces, MOS scoring and 24/7 call quality monitoring. Stop chasing issues and dealing with finger pointing and get direct access to the tools and logs you need."
        democontentBtn="Learn More"
      />
    </>
  );
}

export default Reseller;
