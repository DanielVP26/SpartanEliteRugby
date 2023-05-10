import React from "react";
import "../styles/Header.css";
import Main from "./Main.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import WhySupportUs from "./WhySupportUs";

function Landing() {
  return (
    <>
      <Header />
      <Main />
      <WhySupportUs />
      <Footer />
    </>
  );
}

export default Landing;
