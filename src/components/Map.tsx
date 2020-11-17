import React from "react";
import Modal from "react-modal";
import Spaceship from "./mapkeys/Spaceship";
import Oscillators from "./mapkeys/Oscillators";
import StillLives from "./mapkeys/StillLives";
import "./Map.css";

Modal.setAppElement("#root");

const Map: React.FC = () => {
  return (
    <div className="map">
      <StillLives />
      <Oscillators />
      <Spaceship />
    </div>
  );
};

export default Map;
