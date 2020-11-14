import React, { useState } from "react";
import "./App.css";
//components
import NavBar from "./components/NavBar";
import Game from "./components/Game";
//helper
import { createGrid } from "./helperFunctions/createGrid";
//interface
import { INode } from "./interface/interface";

// 1440/20(one node is 20px) * 0.9(left and right border 1px; 144/20 and substract it from product)
// -2( remove two node left and right)
let cols = Math.floor(window.innerWidth / 20) * 0.9 - 2;
let rows = Math.floor((window.innerHeight - 70 - 80) / 20) * 0.9 - 1;

const App: React.FC = () => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [grid] = useState<INode[][] | undefined>(createGrid(rows, cols));

  const handleRunning = (): void => {
    setIsRunning((prev) => !prev);
  };

  return (
    <div className="App">
      <NavBar isRunning={isRunning} handleRunning={handleRunning} />
      <Game isRunning={isRunning} grid={grid} />
    </div>
  );
};

export default App;
