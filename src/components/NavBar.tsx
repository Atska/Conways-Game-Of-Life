import React from "react";
import "./NavBar.css";
import { NavbarProps } from "../interface/interface";

const NavBar: React.FC<NavbarProps> = ({ isRunning, handleRunning }) => {
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
              <button onClick={() => handleRunning()}>
                {isRunning ? "Stop" : "Start"}
              </button>
            </li>
            <li>
              <button>Clear</button>
            </li>
            <li>
              <input type="range" className="slider"></input>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
