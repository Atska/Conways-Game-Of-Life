import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../NavBar";

describe("<NavBar />", () => {
  it("tests if title is rendered", () => {
    render(<NavBar />);
    const title = screen.queryByText(/Conway's Game of Life/i);
    expect(title).toBeInTheDocument();
  });

  it("tests if title image exists", () => {
    render(<NavBar />);
    const stopButton = screen.queryByAltText(/cell/i);
    expect(stopButton).toBeInTheDocument();
  });

  it("tests if start button exists", () => {
    render(<NavBar />);
    const startButton = screen.queryByText(/Start/i);
    expect(startButton).toBeInTheDocument();
  });

  it("tests if stop button exists", () => {
    render(<NavBar />);
    const stopButton = screen.queryByText(/Stop/i);
    expect(stopButton).toBeInTheDocument();
  });
});
