import React from "react";
import logo from "../img/logo.png";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about">
      <img className="about__logo" src={logo} alt="laptop logo" />
      <h1>Camilla Priest-Stephens</h1>
      <h2>Frontend Developer</h2>
      <p className="about__intro">
        I am a graduate of Command Shift bootcamp looking for a role as a
        Frontend Developer.
      </p>
      <p className="about__tech">
        I have experience of React, JavaScript, CSS, Jest and React Testing
        Library and am always open to learning new tech!
      </p>
    </div>
  );
};

export default About;
