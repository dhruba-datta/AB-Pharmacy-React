// src/Modal.js

import React from "react";
import "./Modal.css";
import { FaTimes } from "react-icons/fa"; // Import close icon from Font Awesome icons

const Modal = ({ show, onClose, marketName, marketDetails }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>{marketName}</h2>
          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <p>{marketDetails}</p>
      </div>
    </div>
  );
};

export default Modal;
