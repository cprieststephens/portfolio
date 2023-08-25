import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-links">
        <li>
          <Link className="navbar-links__item" to="/">
            About
          </Link>
        </li>
        <li>
          <Link className="navbar-links__item" to="projects">
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
