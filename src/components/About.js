import React from "react";
import logo from "../img/logo.png";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about">
      <h1 className="about__name">Camilla Priest-Stephens</h1>
      <h2 className="about__job-title">Frontend Developer</h2>
      <img className="about__logo" src={logo} alt="laptop logo" />
      <p className="about__tech">
        React, JavaScript, CSS, Jest, React Testing Library
      </p>
    </div>
  );
};

export default About;
