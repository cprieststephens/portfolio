import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders correct title", () => {
  render(<App />);
  const portfolioTitle = screen.getByText(/portfolio/i);
  expect(portfolioTitle).toBeInTheDocument();
});
