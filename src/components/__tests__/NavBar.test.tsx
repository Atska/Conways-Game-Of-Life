import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "../NavBar";

const nav = (
  <NavBar
    speed="1"
    isRunning={false}
    handleRunning={jest.fn()}
    handleClearGrid={jest.fn()}
    handleSlider={jest.fn()}
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

  it("tests if clear button exists", () => {
    render(nav);
    const stopButton = screen.queryByText(/Clear/i);
    expect(stopButton).toBeInTheDocument();
  });

  it("tests if clear slider exists", () => {
    render(nav);
    const sliderMax = screen.queryByText(/Fast/i);
    const sliderMin = screen.queryByText(/Slow/i);
    expect(sliderMax).toBeInTheDocument();
    expect(sliderMin).toBeInTheDocument();
  });
});

describe("Start Button", () => {
  it("tests if start button exists", () => {
    render(nav);
    const startButton = screen.queryByText(/Start/i);
    expect(startButton).toBeInTheDocument();
  });
});

describe("Github button", () => {
  it("tests if github button exists", () => {
    render(nav);
    const gitButton = screen.getByText(/github/i);
    expect(gitButton).toBeInTheDocument();
  });

  it("tests if href is correct", () => {
    render(nav);
    const gitButton = screen.getByRole("link", { name: /github/i });
    expect(gitButton.closest("a")).toHaveAttribute(
      "href",
      "https://github.com/Atska/Conways-Game-Of-Life"
    );
  });
});
