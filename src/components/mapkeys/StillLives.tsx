import React, { useState } from "react";
import Modal from "react-modal";
import { customStyles } from "../styles/customStyles";
import "./mapkeys.css";

const StillLives: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(false);
  };
  return (
    <div className="StillLives" onClick={() => setIsOpen(true)}>
      <div className="StillLives-btn">
        <img src="still_lives.png" alt="still_lives"></img>
        <h3>Still Lives</h3>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="space-modal">
          <div className="header">
            <h2>Still Lives</h2>
            <div>
              <button onClick={handleClose}>X</button>
            </div>
          </div>
          <div className="info-text">
            <p>
              Draw the pattern and you get one of the still lives. They are live
              cells but wont do much unless another cell touches them.
            </p>
          </div>
          <div className="content">
            <div className="blinker item">
              <h3>Block: </h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Game_of_life_block_with_border.svg/132px-Game_of_life_block_with_border.svg.png"
                alt="block"
              ></img>
            </div>
            <div className="toad item">
              <h3>Bee-hive: </h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Game_of_life_beehive.svg/196px-Game_of_life_beehive.svg.png"
                alt="bee-hive"
              ></img>
            </div>
            <div className="beacon item">
              <h3>Boat: </h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Game_of_life_boat.svg/164px-Game_of_life_boat.svg.png"
                alt="boat"
              ></img>
            </div>
            <div className="tripole item">
              <h3>Flower: </h3>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Game_of_life_flower.svg/164px-Game_of_life_flower.svg.png"
                alt="flower"
              ></img>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default StillLives;
