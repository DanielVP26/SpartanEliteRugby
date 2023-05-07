import React from "react";
import Vector from "./Vector";
import "../styles/WhySupportUs.css";
import Scope from "./Scope";
import BySupporting from "./BySupporting";
import BrandPresence from "./BrandPresence";
import PartnerCarousel from "./PartnerCarousel";

const WhySupportUs = () => {
  return (
    <>
      <div className="vector">
        <Vector />
        <h1 className="lato_text">¿Por qué apoyarnos?</h1>
      </div>
      <Scope />
      <BySupporting />
      <BrandPresence />
      <div className="partnerBtnContainer">
        <button className="partnerBtn">Hazte patrocinador</button>
      </div>
      <PartnerCarousel />
    </>
  );
};

export default WhySupportUs;
