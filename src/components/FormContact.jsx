import React from "react";
import Vector from "./Vector";
import "../styles/FormContact.css";
import "../styles/FormContactResponsive.css";
import VectorMobile from "./VectorMobile";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const FormContact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_1ubx3gc", "template_gitgbzf", e.target, "qDk38uKce1dlexw7k").then(
      (result) => {
        console.log(result.text);
        toast.success("Gracias por contactarnos! Pronto nos pondremos en contacto contigo.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="FormContactContainer">
      <div id="queOfrecemos"></div>
      <div id="partnerBtnResponsive"></div>
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
              <input type="text" name="name" id="name" placeholder="Nombre Completo" required />
            </div>
            <div className="FormInput">
              <input type="text" name="company" id="company" placeholder="Compañía" required />
            </div>
          </div>
          <div className="Group">
            <div className="FormInput">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Correo electrónico"
                required
              />
            </div>
            <div className="FormInput">
              <input type="tel" name="phone" id="phone" placeholder="Número telefónico" required />
            </div>
          </div>
          <div className="FormInput">
            <textarea
              name="message"
              id="message"
              placeholder="¿Quieres dejarnos un mensaje?"
              required
            />
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
