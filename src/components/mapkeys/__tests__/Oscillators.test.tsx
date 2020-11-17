import React from "react";
import { render, screen } from "@testing-library/react";
import Oscillators from "../Oscillators";

describe("<Oscillators />", () => {
  it("checks if oscillators title is exists", () => {
    render(<Oscillators />);
    const title = screen.getByRole("heading", { name: /Oscillators/i });
    expect(title).toBeInTheDocument();
  });

  it("tests oscillators image exists", () => {
    render(<Oscillators />);
    const img = screen.getByRole("img", { name: /oscillator/i });
    expect(img).toBeInTheDocument();
  });
});
