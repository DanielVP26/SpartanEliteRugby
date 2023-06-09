import React from "react";
import { useSpring, animated } from "react-spring";

const Scope = () => {
  const familiesSpring = useSpring({ number: 250, from: { number: 0 } });
  const followersSpring = useSpring({ number: 2, from: { number: 0 } });
  const viewersSpring = useSpring({ number: 32, from: { number: 0 } });
  const followersSpringDecimal = useSpring({ number: 1, from: { number: 0 } });
  const viewersSpringDecimal = useSpring({ number: 1, from: { number: 0 } });

  return (
    <div className="scope">
      <div className="scope_container">
        <div className="scope_container_text">
          <h1 className="scope_container_title">Llegamos a</h1>
        </div>
        <div className="scope_container_info">
          <div className="scope_container_info_text">
            <animated.h3>{familiesSpring.number.to((val) => Math.floor(val))}</animated.h3>
            <h4>Familias por temporada</h4>
          </div>
          <div className="scope_container_info_text">
            <div className="scope_container_info_number">
              <animated.h3>{followersSpring.number.to((val) => Math.floor(val))}</animated.h3>
              <animated.h3>.</animated.h3>
              <animated.h3>
                {followersSpringDecimal.number.to((val) => Math.floor(val))}
              </animated.h3>
              <animated.h3>K</animated.h3>
            </div>

            <h4>Seguidores en Instagram y LinkedIn</h4>
          </div>
          <div className="scope_container_info_text">
            <div className="scope_container_info_number">
              <animated.h3>{viewersSpring.number.to((val) => Math.floor(val))}</animated.h3>
              <animated.h3>.</animated.h3>
              <animated.h3>{viewersSpringDecimal.number.to((val) => Math.floor(val))}</animated.h3>
              <animated.h3>K</animated.h3>
            </div>

            <h4>Visualizaciones</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scope;
