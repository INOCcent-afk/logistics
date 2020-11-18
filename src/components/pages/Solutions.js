import React from "react";
import Hero from "../Hero";
import Vendor from "../Vendor";
import SolutionContent from "../SolutionContent";
import HeroDisplayImage from "../images/pbx-installer.png";
import HiddenImage from "../images/bg_home.png";
import Image87 from "../images/Image-87.webp";
import Image85 from "../images/Image-85.webp";
import Image88 from "../images/Image-88.webp";
import Image86 from "../images/Image-86.webp";

function Solutions() {
  return (
    <>
      <Hero
        heroDisplayImage={HeroDisplayImage}
        hiddenImage={HiddenImage}
        heroH1="PBX Installers
        & Interconnects"
        heroP="With a decline in premise based phone systems, embrace the opportunity to adapt and evolve your business model with Logistics white label VoIP platform."
        heroBtn="Schedule a Demo"
      />
      <Vendor
        title="Be your own provider"
        p="Stop giving away high-margin, monthly recurring revenue services. With white label VoIP from Logistics, offer your customers cloud-based phone solutions under your own brand. Our reseller platform gives you everything you need to sell, provision, invoice, and support your own VoIP service."
        img85={Image85}
        img86={Image86}
        img87={Image87}
        img88={Image88}
        img85p="White Label Hosted Call Center"
        img86p="Hosted Call Center"
        img87p="White Label Hosted PBX"
        img88p="White Label SIP Trunking"
      />
      <SolutionContent />
    </>
  );
}

export default Solutions;
