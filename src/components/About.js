import React from "react";
import logo from "../img/logo.png";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about">
      <img className="about__logo" src={logo} alt="laptop logo" />
      <h1 className="about__title">Camilla Priest-Stephens</h1>
      <h2 className="about__title">Associate Developer</h2>
      <p className="about__text">
        I am a former Speech and Language Therapist, career changer, graduate of
        Command Shift bootcamp and mentee on the Cajigo 100 Women in Tech
        Accelerator programme.
      </p>
      <p className="about__text">
        I created this portfolio to dislay some of my frontend projects, which
        were built with React, JavaScript, CSS, Jest and React Testing Library.
      </p>
    </div>
  );
};

export default About;
