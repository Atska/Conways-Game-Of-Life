import React, { useState, useRef, useEffect, useCallback } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Game from "./components/Game";
import { createGrid } from "./helperFunctions/createGrid";
import { INode } from "./interface/interface";

// 1440/20(one node is 20px) * 0.9(left and right border 1px; 144/20 and substract it from product)
// -2( remove two node left and right)
let cols = Math.floor(window.innerWidth / 20) * 0.9 - 2;
let rows = Math.floor((window.innerHeight - 70 - 80) / 20) * 0.9 - 1;

const App: React.FC = () => {
  const [isRunning, setRunning] = useState<boolean>(false);
  let [grid, setGrid] = useState<INode[][]>(createGrid(rows, cols));
  //helper ref to tranfer boolean value
  let runningRef = useRef(isRunning);
  runningRef.current = isRunning;

  //useCallback stops recreation of the function
  const handleGame = useCallback(() => {
    //break condition
    if (!runningRef.current) return;

    console.log(isRunning);
    setTimeout(handleGame, 1000);
  }, [isRunning]);

  const handleRunning = () => {
    setRunning((prevValue) => !prevValue);
  };

  useEffect(() => {
    if (isRunning) handleGame();
  }, [handleGame, isRunning]);

  return (
    <div className="App">
      <NavBar isRunning={isRunning} handleRunning={handleRunning} />
      <Game isRunning={isRunning} grid={grid} setGrid={setGrid} />
    </div>
  );
};

export default App;
