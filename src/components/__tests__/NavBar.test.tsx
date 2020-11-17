import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../NavBar";

const nav = (
  <NavBar
    isRunning={false}
    handleRunning={() => {}}
    handleClearGrid={() => {}}
  />
);

describe("<NavBar />", () => {
  it("tests if title is rendered", () => {
    render(nav);
    const title = screen.queryByText(/Conway's Game of Life/i);
    expect(title).toBeInTheDocument();
  });

  it("tests if title image exists", () => {
    render(nav);
    const stopButton = screen.queryByAltText(/cell/i);
    expect(stopButton).toBeInTheDocument();
  });

  it("tests if start button exists", () => {
    render(nav);
    const startButton = screen.queryByText(/Start/i);
    expect(startButton).toBeInTheDocument();
  });

  it("tests if clear button exists", () => {
    render(nav);
    const stopButton = screen.queryByText(/Clear/i);
    expect(stopButton).toBeInTheDocument();
  });
});
