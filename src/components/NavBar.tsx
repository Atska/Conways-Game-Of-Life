import React from "react";
import "./NavBar.css";

function NavBar() {
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
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
