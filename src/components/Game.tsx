import React, { useState } from "react";
import "./Game.css";

import Node from "./Node";

let rows = Math.floor((window.innerHeight - 70 - 80) / 20) * 0.9 - 1;
// 1440/20(one node is 20px) * 0.9(left and right border 1px; 144/20 and substract it from product)
// -2( remove two node left and right)
let cols = Math.floor(window.innerWidth / 20) * 0.9 - 2;

const Game: React.FC = () => {
  const [grid] = useState(createGrid(rows, cols));

  const board = grid.map((row, rowIndex) => {
    return (
      // each row must be in a div so you can form a field in css
      <div className="Row" key={rowIndex}>
        {row.map((node, nodeIndex) => {
          // destructuring node object
          const { row, column, isCell } = node;
          return (
            <Node key={nodeIndex} row={row} column={column} isCell={isCell} />
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

interface INode {
  row: number;
  column: number;
  isCell: boolean;
}

function createGrid(maxRow: number, maxColumn: number): INode[][] {
  const grid: INode[][] = [];

  for (let row = 0; row < maxRow; row++) {
    const currentRow: INode[] = [];

    for (let column = 0; column < maxColumn; column++) {
      let nodeSchema: INode = {
        row: row,
        column: column,
        isCell: false,
      };
      currentRow.push(nodeSchema);
    }
    grid.push(currentRow);
  }

  return grid;
}
