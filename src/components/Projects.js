import React from "react";
import { Link } from "react-router-dom";
import cocktailCompanion from "../img/cocktail-companion.jpg";
import weatherApp from "../img/weather-app.jpg";
import "../styles/projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-item">
        <h1>Cocktail Companion</h1>
        <Link to={process.env.REACT_APP_COCKTAIL_SITE} target="_blank">
          <img
            className="projects-item__image"
            src={cocktailCompanion}
            alt="Cocktail Companion screenshot"
          />
        </Link>
        <p>
          This collaboratively built app fetches and displays cocktail data from
          an API. It is built with React, JavaScript, CSS, Jest and React
          Testing Library.
        </p>
        <p>
          Users can search by name, filter by spirit and click on any cocktail
          to view ingredients and instructions.
        </p>
        <p>
          <Link
            className="projects-item__repo"
            to={process.env.REACT_APP_COCKTAIL_REPO}
            target="_blank"
          >
            View the Github repo here.
          </Link>
        </p>
      </div>
      <div className="projects-item">
        <h1>Weather App</h1>
        <Link to={process.env.REACT_APP_WEATHER_SITE} target="_blank">
          <img
            className="projects-item__image"
            src={weatherApp}
            alt="Weather App screenshot"
          />
        </Link>
        <p>
          This app fetches and displays weather data from an API. It is built
          with React, JavaScript, CSS, Jest and React Testing Library.
        </p>
        <p>
          Users can search by city to view a five day forecast. They can also
          access a more detailed forecast for each date.
        </p>
        <p>
          <Link
            className="projects-item__repo"
            to={process.env.REACT_APP_WEATHER_REPO}
            target="_blank"
          >
            View the Github repo here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Projects;
