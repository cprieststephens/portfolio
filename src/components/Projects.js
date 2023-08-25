import React from "react";
import { Link } from "react-router-dom";
import cocktailCompanion from "../img/cocktail-companion.jpg";
import surrealEstate from "../img/surreal-estate.jpg";
import weatherApp from "../img/weather-app.jpg";
import "../styles/projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-item">
        <h1>Cocktail Companion</h1>
        <Link to="https://www.cocktailcompanion.bar/" target="_blank">
          <img
            className="projects-item__image"
            src={cocktailCompanion}
            alt="Cocktail Companion screenshot"
          />
        </Link>
        <p>
          Collaboratively built with React, JavaScript, CSS, Jest and React
          Testing Library.
        </p>
        <p>
          This cocktail mixing app displays API data and allows users to search
          for drinks by name, filter by spirit and click on cocktail cards to
          view ingredients and instructions.
        </p>
        <p>
          <Link
            className="projects-item__repo"
            to="https://github.com/josenymad/cocktail-companion"
            target="_blank"
          >
            View the Github repo here.
          </Link>
        </p>
      </div>
      <div className="projects-item">
        <h1>Surreal Estate</h1>
        <img
          className="projects-item__image"
          src={surrealEstate}
          alt="Surreal Estate screenshot"
        />
        <p>
          Built with React, JavaScript, CSS, Firebase, Jest and React Testing
          Library.
        </p>
        <p>
          This property listing app displays API data and allows users to search
          by keyword, filter by city and sort by price. This project is
          currently in progress.
        </p>
        <p>
          <Link
            className="projects-item__repo"
            to="https://github.com/cprieststephens/surreal-estate"
            target="_blank"
          >
            View the Github repo here.
          </Link>
        </p>
      </div>
      <div className="projects-item">
        <h1>Weather App</h1>
        <Link to="https://check-the-forecast.netlify.app/" target="_blank">
          <img
            className="projects-item__image"
            src={weatherApp}
            alt="Weather App screenshot"
          />
        </Link>
        <p>
          Built with React, JavaScript, CSS, Jest and React Testing Library.
        </p>
        <p>
          This weather app allows users to search by city to fetch forecast data
          from an API. Users can also access a more detailed forecast for each
          date by clicking a button.
        </p>
        <p>
          <Link
            className="projects-item__repo"
            to="https://github.com/cprieststephens/weather-app"
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
