import React, { useState } from "react";
import Modal from "react-modal";
import { customStyles } from "./styles/customStyles";
import "./RulesButton.css";

const RulesButton: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <div className="rules" onClick={() => setIsOpen(true)}>
      <div className="rules-btn">
        <p>How To Play</p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="rules-modal">
          <div className="header">
            <h2>How To Play</h2>
            <div>
              <button onClick={handleClose}>X</button>
            </div>
          </div>
          <div className="howto-text">
            <h3>Draw</h3>
            <p>
              You can click on the board to create live cells. When you have
              enough press the start button. For more info on possible cells
              click on <u>Still Lives</u>, <u>Oscillators</u> or{" "}
              <u>Spaceships</u>.
            </p>
          </div>
          <div className="rules-text">
            <h3>Rules</h3>
            <ul>
              <li>Any live cell with two or three live neighbours survives.</li>
              <li>
                Any dead cell with three live neighbours becomes a live cell.
              </li>
              <li>
                All other live cells die in the next generation. Similarly, all
                other dead cells stay dead.
              </li>
            </ul>
          </div>
          <div className="content"></div>
        </div>
      </Modal>
    </div>
  );
};

export default RulesButton;
