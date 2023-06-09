import React from "react";
import Vector from "./Vector";
import "../styles/WhySupportUs.css";
import "../styles/WhySupportUsResponsive.css";
import Scope from "./Scope";
import BySupporting from "./BySupporting";
import BrandPresence from "./BrandPresence";
import PartnerCarousel from "./PartnerCarousel";
import VectorMobile from "./VectorMobile";

const WhySupportUs = () => {
  return (
    <>
      <div className="vector">
        <div className="vectorDesktop">
          <Vector />
        </div>
        <div className="vectorMobile">
          <VectorMobile />
        </div>
        <h1 className="lato_text">¿Por qué apoyarnos?</h1>
      </div>
      <Scope />
      <BySupporting />
      <BrandPresence />
      <div className="partnerBtnContainer">
        <button className="partnerButton">
          <a href="#queOfrecemos" className="btn-oldLink">
            Hazte patrocinador
          </a>
        </button>
      </div>
      <PartnerCarousel />
    </>
  );
};

export default WhySupportUs;
