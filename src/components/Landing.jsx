import React from "react";
import "../styles/Header.css";
import "../styles/HeaderResponsive.css";
import "../styles/Main.css";
import "../styles/MainResponsive.css";
import "../styles/Footer.css";
import "../styles/FooterResponsive.css";
import Main from "./Main.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import WhySupportUs from "./WhySupportUs";
import FormContact from "./FormContact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Landing() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Main />
      <WhySupportUs />
      <FormContact />
      <Footer />
    </>
  );
}

export default Landing;
