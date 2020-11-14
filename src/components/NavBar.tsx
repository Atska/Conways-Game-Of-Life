import React from "react";
import "./NavBar.css";

const NavBar: React.FC = () => {
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
              <button>Start</button>
            </li>
            <li>
              <button>Stop</button>
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
