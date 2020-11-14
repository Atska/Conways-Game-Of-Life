import React from "react";
import "./NavBar.css";
//interface
import { NavbarProps } from "../interface/interface";

const NavBar: React.FC<NavbarProps> = ({ isRunning, handleRunning }) => {
  const handleStart = (): void => {
    if (!isRunning) {
      handleRunning();
      console.log(isRunning);
    }
  };
  const handleStop = (): void => {
    if (isRunning) {
      handleRunning();
      console.log(isRunning);
    }
  };

  return (
    <div className="navbar">
      <div className="container flex">
        <div className="title flex">
          <img src="virus.png" alt="cell"></img>
          <h2>Conway's Game of Life</h2>
        </div>
        <nav>
          <ul>
            <li>
              <button onClick={handleStart}>Start</button>
            </li>
            <li>
              <button onClick={handleStop}>Stop</button>
            </li>
            <li>
              <button>Clear</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
