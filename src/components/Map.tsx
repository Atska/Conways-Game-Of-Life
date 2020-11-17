import React, { useState, useRef } from "react";
import Modal from "react-modal";
import "./Map.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "linear-gradient(to right, #141e30, #243b55)",
  },
};

Modal.setAppElement("#root");
const Map = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsOpen(false);
  };
  return (
    <div className="map">
      <div className="still-lives">
        <h3>Still lives</h3>
      </div>
      <div className="oscillators">
        <h3>Oscillators</h3>
      </div>
      <div className="spaceships" onClick={() => setIsOpen(true)}>
        <h3>Spaceships</h3>
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
            <div className="content">
              <p>Hello world</p>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Map;
