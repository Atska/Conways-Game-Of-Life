import React, { useEffect, useState } from "react";
import "./Game.css";
//components
import Node from "./Node";
//helper
import { INode, GameProps } from "../interface/interface";

const Game: React.FC<GameProps> = ({ isRunning, grid, setGrid }) => {
  const [MouseIsClicked, setMouseIsClicked] = useState<boolean>(false);
  const handleOnClick = (row: number, column: number): void => {
    let newGrid = setCellNode(grid, row, column);
    setGrid(newGrid);
  };

  const onMouseDown = (row: number, column: number): void => {
    setMouseIsClicked(true);
  };
  const onMouseUp = (): void => {
    setMouseIsClicked(false);
  };

  const onMouseEnter = (row: number, column: number): void => {
    const { isCell } = grid[row][column];
    if (MouseIsClicked && !isCell) {
      let newGrid = setCellNode(grid, row, column);
      setGrid(newGrid);
    }
  };

  const board = grid.map((row: INode[], rowIndex: number) => {
    return (
      // each row must be in a div so you can form a field in css
      <div className="Row" key={rowIndex}>
        {row.map((node: INode, nodeIndex: number) => {
          // destructuring node object
          const { row, column, isCell } = node;
          return (
            <Node
              key={nodeIndex}
              row={row}
              column={column}
              isCell={isCell}
              handleOnClick={() => handleOnClick(rowIndex, nodeIndex)}
              onMouseUp={() => onMouseUp()}
              onMouseDown={() => onMouseDown(rowIndex, nodeIndex)}
              onMouseEnter={() => {
                onMouseEnter(rowIndex, nodeIndex);
              }}
            />
          );
        })}
      </div>
    );
  });

  return (
    <div className="game">
      <div className="game-container">
        <div className="game-title">
          <h1>Game of Life</h1>
        </div>
        <div className="board">{board}</div>
      </div>
    </div>
  );
};

export default Game;

const setCellNode = (grid: INode[][], row: number, column: number) => {
  const currentNode = grid[row][column];
  if (currentNode.isCell) {
    currentNode.isCell = false;
  } else {
    currentNode.isCell = true;
  }
  let newGrid = [];
  for (let i = 0; i < grid.length; i++) {
    newGrid.push(grid[i]);
  }
  return newGrid;
};
