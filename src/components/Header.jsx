import React from "react";
import Brand from "./Brand.jsx";
import "../styles/Header.css";

function Header() {
  return (
    <>
      <header className="headerContainer">
        <nav>
          <a href="/" class="brand">
            <Brand />
          </a>
          <ul>
            <li>
              <a className="link" href="#queEsSpartan">
                Conócenos
              </a>
            </li>
            <li>
              <a className="link" href="#nuestrosValores">
                ¿Porqué apoyarnos?
              </a>
            </li>
            <li>
              <div className="btn-nav">
                <a
                  href="#queOfrecemos"
                  className="btn-oldLink"
                >
                  Hazte patrocinador
                </a>
              </div>
            </li>
          </ul>
        </nav>
        <div className="sloganContainer">
          <h2 className="slogan">Cuando nadie se queda atrás,</h2>
          <h2 className="slogan">todo el mundo camina</h2>
          <h2 className="slogan">hacia adelante</h2>
        </div>
        <div className="greyBar">
          <p>Apoya a Spartan e impulsa el crecimiento de tu marca</p>
        </div>
      </header>
    </>
  );
}

export default Header;
