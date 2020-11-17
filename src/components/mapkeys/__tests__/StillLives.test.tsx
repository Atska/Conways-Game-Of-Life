import React from "react";
import { render, screen } from "@testing-library/react";
import StillLives from "../StillLives";

describe("<StillLives>", () => {
  it("checks if still lives title is exists", () => {
    render(<StillLives />);
    const title = screen.getByRole("heading", { name: /Still Lives/i });
    expect(title).toBeInTheDocument();
  });

  it("tests still lives image exists", () => {
    render(<StillLives />);
    const img = screen.getByRole("img", { name: /still_lives/i });
    expect(img).toBeInTheDocument();
  });
});
