import React from "react";
import logo from "../img/logo.png";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about">
      <img className="about__logo" src={logo} alt="laptop logo" />
      <h1 className="about__name">Camilla Priest-Stephens</h1>
      <h2 className="about__job">Frontend Developer</h2>
      <p className="about__text">
        I am a graduate of Command Shift bootcamp looking for a role as a
        Frontend Developer.
      </p>
      <p className="about__text">
        I have experience of React, JavaScript, CSS, Jest and React Testing
        Library and am always open to learning new tech!
      </p>
    </div>
  );
};

export default About;
