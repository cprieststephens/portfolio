import React from "react";
import { Link } from "react-router-dom";
import emailIcon from "../img/email-icon.png";
import linkedInIcon from "../img/linkedin-icon.png";
import xIcon from "../img/x-icon.png";
import githubIcon from "../img/github-icon.png";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <Link className="contact__link" to="mailto:camillaprieststephens@gmail.com">
        <img className="contact__icon" src={emailIcon} alt="email icon" />
      </Link>
      <Link
        to="https://www.linkedin.com/in/camilla-priest-stephens/"
        target="_blank"
      >
        <img className="contact__icon" src={linkedInIcon} alt="LinkedIn icon" />
      </Link>
      <Link to="https://twitter.com/Camilla_Codes" target="_blank">
        <img className="contact__icon" src={xIcon} alt="X icon" />
      </Link>
      <Link to="https://github.com/cprieststephens" target="_blank">
        <img className="contact__icon" src={githubIcon} alt="Github icon" />
      </Link>
    </div>
  );
};

export default Contact;
