import React from "react";
import { useSpring, animated } from "react-spring";
import numeral from "numeral";

const Scope = () => {
  const familiesSpring = useSpring({ number: 250, from: { number: 250 } });
  const followersSpring = useSpring({ number: 2100, from: { number: 2100 } });
  const viewersSpring = useSpring({ number: 32100, from: { number: 32100 } });

  return (
    <div className="scope">
      <div className="scope_container">
        <div className="scope_container_text">
          <h1 className="scope_container_title">Llegamos a</h1>
        </div>
        <div className="scope_container_info">
          <div className="scope_container_info_text">
            <animated.h3>
              {numeral(familiesSpring.number.interpolate((val) => Math.floor(val))).format("0.0a")}
            </animated.h3>
            <h4>Familias por temporada</h4>
          </div>
          <div className="scope_container_info_text">
            <animated.h3>
              {numeral(followersSpring.number.interpolate((val) => Math.floor(val))).format("0.0a")}
            </animated.h3>
            <h4>Seguidores en Instagram y LinkedIn</h4>
          </div>
          <div className="scope_container_info_text">
            <animated.h3>
              {numeral(viewersSpring.number.interpolate((val) => Math.floor(val))).format("0.0a")}
            </animated.h3>
            <h4>Televidentes</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scope;
