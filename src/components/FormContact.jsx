import React from "react";
import Vector from "./Vector";
import "../styles/FormContact.css";
import "../styles/FormContactResponsive.css";
import VectorMobile from "./VectorMobile";
import emailjs from "emailjs-com";

const FormContact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_1ubx3gc", "template_gitgbzf", e.target, "qDk38uKce1dlexw7k").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <div className="FormContactContainer">
      <div className="vector">
        <div className="vectorDesktop">
          <Vector />
        </div>
        <div className="vectorMobile">
          <VectorMobile />
        </div>
        <div className="TitleFormContainer">
          <h1>Hazte patrocinador</h1>
          <h2>¡Dejanos tus datos y pronto te contactaremos!</h2>
        </div>
      </div>
      <div className="FormContainer">
        <form className="Form" onSubmit={sendEmail}>
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
