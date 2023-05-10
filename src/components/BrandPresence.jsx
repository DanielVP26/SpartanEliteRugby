import React from "react";
import BrandPresence1 from "../assets/img/brand-presence1.png";
import BrandPresence2 from "../assets/img/brand-presence2.png";
import BrandPresence3 from "../assets/img/brand-presence3.png";
import BrandPresence4 from "../assets/img/brand-presence4.png";

const BrandPresence = () => {
  return (
    <div className="BrandPresence">
      <div className="backgroundBlack"></div>
      <div className="backgroundWhite"></div>
      <div className="BrandPresenceContainer">
        <div className="BrandPresenceTitleContaienr">
          <h2 className="BrandPresenceTitle">Elige tu presencia de marca</h2>
        </div>
        <div className="BrandPresenceInfo">
          <div className="BrandPresenceInfo_item">
            <p>Medios digitales WEB, RR.SS, Pie de Banner digital en eventos oficiales</p>
            <img src={BrandPresence1} alt="BrandPresence1" />
          </div>
          <div className="BrandPresenceInfo_item">
            <p>Fondo en disertaciones y exposiciones</p>
            <img src={BrandPresence2} alt="BrandPresence2" />
          </div>
          <div className="BrandPresenceInfo_item">
            <p>Publicidad en Bus de traslado</p>
            <img src={BrandPresence3} alt="BrandPresence3" />
          </div>
          <div className="BrandPresenceInfo_item">
            <p>Visibilidad de marca en talleres de inclusión</p>
            <img src={BrandPresence4} alt="BrandPresence4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandPresence;
