import React from "react";
import { render, screen } from "@testing-library/react";
import Game from "../Game";

const node = {
  row: 1,
  column: 1,
  isCell: false,
};
const fakeProps = {
  isRunning: false,
  grid: [[node]],
  setGrid: () => {},
};

const game = (
  <Game
    isRunning={fakeProps.isRunning}
    grid={fakeProps.grid}
    setGrid={fakeProps.setGrid}
  />
);

describe("<Game />", () => {
  it("should render the board", () => {
    render(game);
    const boardContainer = screen.getByTestId("test-board");
    const board = screen.getByTestId("0");
    expect(boardContainer).toBeInTheDocument();
    expect(board).toBeInTheDocument();
  });

  it("should render a node correctly", () => {
    render(game);
    const oneNode = screen.getByTestId("1, 1");
    expect(oneNode).toBeInTheDocument();
  });
});
