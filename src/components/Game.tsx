import React from "react";
import "./Game.css";
//components
import Node from "./Node";
//helper
import { INode, GameProps } from "../interface/interface";

const Game: React.FC<GameProps> = ({ isRunning, grid }) => {
  const handleNodeClick = (row: number, column: number) => {
    console.log(row, column);
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
              handleNodeClick={() => handleNodeClick(rowIndex, nodeIndex)}
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
