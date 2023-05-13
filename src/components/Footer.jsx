import React from "react";
import "../styles/Footer.css";
import LogoFooter from "./LogoFooter";
import Icon1 from "./Icon1";
import Icon2 from "./Icon2";
import Icon3 from "./Icon3";

function Footer() {
  return (
    <>
      <div className="footerBackground">
        <div className="footerContainer">
          <div className="adress">
            <p className="contact">Contacto</p>
            <p className="email">info@spartaneliterugby.es</p>
            <p className="number">+34 632 38 67 99</p>
            <p>Partida Planos, 15, 29410, Málaga</p>
          </div>
          <div className="logoFooter">
            <LogoFooter />
          </div>
          <div className="socialContainer">
            <div className="social">
              <p>¡Siguenos!</p>
              <div className="icons">
                <a
                  href="https://www.facebook.com/spartaneliterugby/"
                  className="Icon1"
                  alt="facebookLink"
                  target="about:blank"
                >
                  <Icon1 />
                </a>
                <a
                  href="https://www.instagram.com/spartanelite_rugby/?hl=es"
                  className="Icon2"
                  alt="instagramLink"
                  target="about:blank"
                >
                  <Icon2 />
                </a>
                <a
                  href="https://www.youtube.com/@spartaneliterugby8960"
                  className="Icon3"
                  alt="youtubeLink"
                  target="about:blank"
                >
                  <Icon3 />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
