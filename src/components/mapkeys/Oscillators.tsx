import React, { useState } from "react";
import Modal from "react-modal";
import { customStyles } from "../styles/customStyles";
import "./mapkeys.css";

const Oscillators: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(false);
  };
  return (
    <div className="oscillators" onClick={() => setIsOpen(true)}>
      <div className="oscillator-btn">
        <img src="osc.png" alt="oscillator"></img>
        <h3>Oscillators</h3>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="space-modal">
          <div className="header">
            <h2>Oscillators</h2>
            <div>
              <button onClick={handleClose}>X</button>
            </div>
          </div>
          <div className="info-text">
            <p>
              Draw the pattern and you get one of the oscillators. They are
              static, yet moveable cells.
            </p>
          </div>
          <div className="content">
            <div className="blinker item">
              <h3>Blinker: </h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/95/Game_of_life_blinker.gif"
                alt="blinker"
              ></img>
            </div>
            <div className="toad item">
              <h3>Toad: </h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/12/Game_of_life_toad.gif"
                alt="toad"
              ></img>
            </div>
            <div className="beacon item">
              <h3>Beacon: </h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Game_of_life_beacon.gif"
                alt="beacon"
              ></img>
            </div>
            <div className="tripole item">
              <h3>Tripole: </h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/bb/2g3_2-laser.gif"
                alt="tripole"
              ></img>
            </div>
            <div className="penta item">
              <h3>Penta-decathlon: </h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/74/Pulsator.gif"
                alt="penta"
              ></img>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Oscillators;
