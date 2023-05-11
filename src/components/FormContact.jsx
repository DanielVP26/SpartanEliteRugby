import React from "react";
import Vector from "./Vector";
import "../styles/FormContact.css";

const FormContact = () => {
  return (
    <div className="FormContactContainer">
      <div className="vector">
        <Vector />
        <div className="TitleFormContainer">
          <h1>Hazte patrocinador</h1>
          <h2>¡Dejanos tus datos y pronto te contactaremos!</h2>
        </div>
      </div>
      <div className="FormContainer">
        <form className="Form">
          <div className="Group">
            <div className="FormInput">
              <input type="text" name="name" id="name" placeholder="Nombre Completo" />
            </div>
            <div className="FormInput">
              <input type="text" name="company" id="company" placeholder="Compañía" />
            </div>
          </div>
          <div className="Group">
            <div className="FormInput">
              <input type="email" name="email" id="email" placeholder="Correo electrónico" />
            </div>
            <div className="FormInput">
              <input type="tel" name="phone" id="phone" placeholder="Número telefónico" />
            </div>
          </div>
          <div className="FormInput">
            <textarea name="message" id="message" placeholder="¿Quieres dejarnos un mensaje?" />
          </div>
          <div className="ButtonFormContainer">
            <input type="submit" value="Enviar" className="ButtonForm" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
