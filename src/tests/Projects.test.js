import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Projects from "../components/Projects";

describe("Projects", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct titles", () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>,
    );
    const cocktailCompanion = screen.getByText(/cocktail companion/i);
    const surrealEstate = screen.getByText(/surreal estate/i);
    const weatherApp = screen.getByText(/weather app/);

    expect(cocktailCompanion).toBeInTheDocument();
    expect(surrealEstate).toBeInTheDocument();
    expect(weatherApp).toBeInTheDocument();
  });

  it("renders the correct images", () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>,
    );
    const cocktailCompanionImage = screen.getByAltText(
      "Cocktail Companion screenshot",
    );
    const surrealEstateImage = screen.getByAltText("Surreal Estate screenshot");
    const weatherAppImage = screen.getByAltText("Weather App screenshot");

    expect(cocktailCompanionImage).toBeInTheDocument();
    expect(surrealEstateImage).toBeInTheDocument();
    expect(weatherAppImage).toBeInTheDocument();
  });
});
