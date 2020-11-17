import React from "react";
import "./NavBar.css";
import RulesButton from "./RulesButton";
import { NavbarProps } from "../interface/interface";

const NavBar: React.FC<NavbarProps> = ({
  isRunning,
  speed,
  handleRunning,
  handleClearGrid,
  handleSlider,
}) => {
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
              <button onClick={() => handleClearGrid()}>Clear</button>
            </li>
            <li>
              <div className="maxSliderVal"></div>
              <div className="slider">
                <div className="left">Fast</div>
                <input
                  onChange={handleSlider}
                  value={speed}
                  step="1"
                  type="range"
                  min="1"
                  max="11"
                  className="slider"
                ></input>
                <div className="right">Slow</div>
              </div>
            </li>
            <li>
              <RulesButton />
            </li>
            <li>
              <div className="github">
                <a
                  href="https://github.com/Atska/Conways-Game-Of-Life"
                  className="git-link"
                >
                  Github
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
