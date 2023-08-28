import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

describe("Navbar", () => {
  it("renders correctly", () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders about link text", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const about = screen.getByText(/about/i);

    expect(about).toBeInTheDocument();
  });

  it("renders projects link text", () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const projects = screen.getByText(/projects/i);

    expect(projects).toBeInTheDocument();
  });
});
