import React, { useState } from "react";
import Modal from "react-modal";
import { customStyles } from "../styles/customStyles";
import "./mapkeys.css";

const Spaceship: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(false);
  };
  return (
    <div className="spaceships" onClick={() => setIsOpen(true)}>
      <div className="spaceships-btn">
        <img src="ufo.png" alt="ufo"></img>
        <h3>Spaceships</h3>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="space-modal">
          <div className="header">
            <h2>Spaceships</h2>
            <div>
              <button onClick={handleClose}>X</button>
            </div>
          </div>
          <div className="info-text">
            <p>
              Draw the pattern and you get one of the spaceships. They are
              moveable cells.
            </p>
          </div>
          <div className="content">
            <div className="glider item">
              <h3>Glider: </h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Game_of_life_animated_glider.gif"
                alt="glider"
              ></img>
            </div>
            <div className="LW-spaceship item">
              <h3>Light- weight spaceship: </h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/37/Game_of_life_animated_LWSS.gif"
                alt="Light- weight spaceship"
              ></img>
            </div>
            <div className="MW-spaceship item">
              <h3>Middle- weight spaceship: </h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Animated_Mwss.gif"
                alt="Middle- weight spaceship"
              ></img>
            </div>
            <div className="HW-spaceship item">
              <h3>Heavy- weight spaceship: </h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/37/Game_of_life_animated_LWSS.gif"
                alt="Heavy-
                  weight
                  spaceship"
              ></img>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Spaceship;
