import React, { useState, useRef, useEffect, useCallback } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Game from "./components/Game";
import Map from "./components/Map";
import { createGrid } from "./helperFunctions/createGrid";
import { INode } from "./interface/interface";

// 1440/20(one node is 20px) * 0.9(left and right border 1px; 144/20 and substract it from product)
// -2( remove two node left and right)
let cols = Math.floor(window.innerWidth / 20) * 0.9 - 2;
let rows = Math.floor((window.innerHeight - 70 - 80) / 20) * 0.9;

const App: React.FC = () => {
  const [isRunning, setRunning] = useState<boolean>(false);
  const [grid, setGrid] = useState<INode[][]>(createGrid(rows, cols));
  const [speed, setSpeed] = useState<string>("6");

  //helper ref to tranfer boolean value
  let runningRef = useRef(isRunning);
  runningRef.current = isRunning;

  let speedRef = useRef(speed);
  speedRef.current = speed;

  //useCallback stops recreation of the function
  const handleGame = useCallback(() => {
    //break condition
    if (!runningRef.current) return;
    setGrid((prevGrid) => game(prevGrid));
    setTimeout(handleGame, 50 * parseInt(speedRef.current));
  }, []);

  const handleSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(event.target.value);
  };
  const handleRunning = () => {
    setRunning((prevValue) => !prevValue);
  };

  const handleClearGrid = () => {
    setGrid(createGrid(rows, cols));
  };

  useEffect(() => {
    if (isRunning) handleGame();
  }, [handleGame, isRunning]);

  return (
    <div className="App">
      <NavBar
        isRunning={isRunning}
        handleRunning={handleRunning}
        handleClearGrid={handleClearGrid}
        handleSlider={handleSlider}
        speed={speed}
      />
      <Map />
      <Game grid={grid} setGrid={setGrid} />
    </div>
  );
};

export default App;

/**
 * Simulation of the game of life
 * @param grid
 */
const game = (grid: INode[][]): INode[][] => {
  const newGrid = [];
  for (let i = 0; i < grid.length; i++) {
    const newRows = [];
    for (let j = 0; j < grid[0].length; j++) {
      const neigh = liveNeighborCount(grid[i][j], grid);
      let c = grid[i][j];
      // 1# rule: Any living cell with less than 2 and more than 3 live neighbors dies
      // 2# rule: Any dead cell with three live neigh becomes alive
      if (neigh === 3 && c.isCell === false) {
        c = { row: i, column: j, isCell: true };
      } else if (neigh < 2 || neigh > 3) {
        c = { row: i, column: j, isCell: false };
      }

      newRows.push(c);
    }
    newGrid.push(newRows);
  }

  return newGrid;
};

/**
 * Counts the number of live neighbor cells of current node
 * @param currentNode
 * @param grid
 * @returns number of live cell
 */
const liveNeighborCount = (currentNode: INode, grid: INode[][]): number => {
  // direction of possible neighbors in a grid
  const directions = [
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];

  let count = 0;

  for (let direction of directions) {
    const rowIdx = currentNode.row + direction[0];
    const colIdx = currentNode.column + direction[1];

    if (
      rowIdx >= 0 &&
      colIdx >= 0 &&
      rowIdx < grid.length &&
      colIdx < grid[0].length &&
      grid[rowIdx][colIdx].isCell
    )
      count += 1;
  }

  return count;
};
