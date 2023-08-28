import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

describe("About", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<About />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the correct title", () => {
    render(<About />);
    const title = screen.getByText(/camilla priest-stephens/i);

    expect(title).toBeInTheDocument();
  });

  it("renders the correct image", () => {
    render(<About />);
    const logo = screen.getByAltText("laptop logo");

    expect(logo).toBeInTheDocument();
  });
});
