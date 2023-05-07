import React from "react";

import visibility from "../assets/visibility.svg";
import claspedHands from "../assets/clasped_hands.svg";
import rocket from "../assets/rocket.svg";

const BySupporting = () => {
  return (
    <div className="by_supporting">
      <div className="by_supporting_container">
        <div className="by_supporting_container_text">
          <h1 className="by_supporting_container_title">Al apoyar a Spartan tu marca tendrá:</h1>
        </div>
        <div className="by_supporting_container_info">
          <div className="by_supporting_container_info_text">
            <img src={visibility} alt="visibility" />
            <h4>Mayor visibilidad</h4>
          </div>
          <div className="by_supporting_container_info_text">
            <img src={claspedHands} alt="claspedHands" />
            <h4>Asociación positiva con los valores de nuestro deporte</h4>
          </div>
          <div className="by_supporting_container_info_text">
            <img src={rocket} alt="claspedHands" />
            <h4>Crecimiento en campañas efectivas</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BySupporting;
