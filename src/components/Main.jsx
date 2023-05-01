import React from "react";
import Vector from "./Vector";
import X from "./X";
import "../styles/Main.css";

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
            <div className="cardOne"></div>
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
                  la fortaleza, disciplina y honor del ideal espartano a través
                  de
                </p>
                <p className="cardOneParagraph3">la práctica del Rugby.</p>
                <p className="cardOneParagraph4">
                  Nuestro staff técnico siempre se compone 
                </p>
                <p className="cardOneParagraph5">
                   de jugadores y jugadoras de la selección Española de Rugby y
                </p>
                <p className="cardOneParagraph6">Seleccionadores Autonómicos.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
