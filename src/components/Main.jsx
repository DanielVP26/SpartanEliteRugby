import React from "react";
import Vector from "./Vector";
import X from "./X";
import "../styles/Main.css";
import Fade from "react-reveal/Fade";
function Main() {
  return (
    <>
      <main className="mainContainer">
        <section>
          <div className="vector">
            <Vector />
            <h1 className="textInfo">conócenos</h1>
          </div>
          <div className="cardContainer">
            <Fade left>
              <div className="cardOne"></div>
            </Fade>
            <Fade right>
              <div id="queEsSpartan"></div>
              <div className="cardOneInfo">
                <div className="xContainer">
                  <div className="x">
                    <X />
                  </div>
                  <div className="x">
                    <X />
                  </div>
                  <div className="x">
                    <X />
                  </div>
                </div>
                <h2 className="cardOneText">¿Qué es Spartan?</h2>
                <div className="cardTextContainer">
                  <p className="cardOneParagraph1">
                    Somos un campus de tecnificación y nacimos para representar
                  </p>
                  <p className="cardOneParagraph2">
                    la fortaleza, disciplina y honor del ideal espartano a
                    través de
                  </p>
                  <p className="cardOneParagraph3">la práctica del Rugby.</p>
                  <p className="cardOneParagraph4">
                    Nuestro staff técnico siempre se compone
                  </p>
                  <p className="cardOneParagraph5">
                    de jugadores y jugadoras de la selección Española de Rugby y
                  </p>
                  <p className="cardOneParagraph6">
                    Seleccionadores Autonómicos.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </section>
        <section>
          <div className="cardTwoContainer">
            <Fade right>
              <div className="cardTwo"></div>
            </Fade>
            <div id="nuestrosValores"></div>
            <Fade left>
              <div className="cardTwoInfo">
                <div className="xTwoContainer">
                  <div className="xTwo">
                    <X />
                  </div>
                  <div className="xTwo">
                    <X />
                  </div>
                  <div className="xTwo">
                    <X />
                  </div>
                </div>
                <h2 className="cardTwoText">Nuestros valores</h2>
                <div className="cardTwoTextContainer">
                  <p className="keyWord">Lealtad - Sacrificio - Esfuerzo</p>
                  <p className="keyWord2">Compromiso - Trabajo - Convicción</p>
                </div>
                <div className="cardTwoTextInfo">
                  <p className="text1">
                    Son los valores que involucramos a través de la práctica de
                  </p>
                  <p className="text2"> Rugby.</p>
                  <p className="text3">
                    Creemos en el deporte como principal motor de integración
                  </p>
                  <p className="text4">
                    de jóvenes en los valores individuales y colectivos.
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        </section>
        <section>
          <div className="cardThreeContainer">
            <Fade left>
              <div className="cardThree"></div>
            </Fade>
            <div id="#queOfrecemos"></div>
            <Fade right>
              <div className="cardThreeInfo">
                <div className="xContainer">
                  <div className="x">
                    <X />
                  </div>
                  <div className="x">
                    <X />
                  </div>
                  <div className="x">
                    <X />
                  </div>
                </div>
                <h2 className="cardThreeText">¿Qué ofrecemos?</h2>
                <div className="cardListContainer">
                  <ul className="cardUlList">
                    <li className="cardList">Clinic de Tecnificación </li>
                    <li className="cardList">Campus Femenino</li>
                    <li className="cardList">Campus Masculino</li>
                    <li className="cardList">Torneos</li>
                    <li className="cardList">Clinic de Alto Rendimiento</li>
                  </ul>
                  <ul className="cardUlList2  ">
                    <li className="cardList2">Spartan Academy</li>
                    <li className="cardList2">Clinic para Entrenadores/as</li>
                    <li className="cardList2">Trofeo al Mejor Jugador</li>
                    <li className="cardList2">Colaboraciones</li>
                  </ul>
                </div>
              </div>
            </Fade>
          </div>
        </section>
        <div className="btn-container">
          <div className="btn-main">
            <a
              href="https://spartaneliterugby.es/"
              target="_blank"
              className="btn-oldLinkMain"
            >
              Conoce más
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
