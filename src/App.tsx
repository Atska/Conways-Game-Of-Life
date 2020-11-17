import React, { useState, useRef, useEffect, useCallback } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Game from "./components/Game";
import Map from "./components/Map";
import game from "./helperFunctions/game";
import createGrid from "./helperFunctions/createGrid";
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
