import React from "react";
import "../styles/Header.css";
import Main from "./Main.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import WhySupportUs from "./WhySupportUs";
import FormContact from "./FormContact";

function Landing() {
  return (
    <>
      <Header />
      <Main />
      <WhySupportUs />
      <FormContact />
      <Footer />
    </>
  );
}

export default Landing;
