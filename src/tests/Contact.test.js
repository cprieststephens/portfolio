import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Contact from "../components/Contact";

describe("Contact", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct images", () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>,
    );
    const emailIcon = screen.getByAltText("email icon");
    const linkedInIcon = screen.getByAltText("LinkedIn icon");
    const xIcon = screen.getByAltText("X icon");
    const gitHubIcon = screen.getByAltText("Github icon");

    expect(emailIcon).toBeInTheDocument();
    expect(linkedInIcon).toBeInTheDocument();
    expect(xIcon).toBeInTheDocument();
    expect(gitHubIcon).toBeInTheDocument();
  });
});
