import React, { useEffect } from "react";
import "./Modal.css";
import { FaTimes } from "react-icons/fa";

const Modal = ({ show, onClose, marketName, marketDetails }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [show]);

  if (!show) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal" onClick={handleModalClick}>
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
