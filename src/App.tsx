import React, { useState } from "react";
import "./App.css";
//components
import NavBar from "./components/NavBar";
import Game from "./components/Game";

const App: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <Game />
    </div>
  );
};

export default App;
