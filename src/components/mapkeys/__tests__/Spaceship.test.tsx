import React from "react";
import { render, screen } from "@testing-library/react";
import Spaceship from "../Spaceship";

describe("<Spaceship>", () => {
  it("checks if spaceship title is exists", () => {
    render(<Spaceship />);
    const title = screen.getByRole("heading", { name: /spaceships/i });
    expect(title).toBeInTheDocument();
  });

  it("tests still lives image exists", () => {
    render(<Spaceship />);
    const img = screen.getByRole("img", { name: /ufo/i });
    expect(img).toBeInTheDocument();
  });
});
