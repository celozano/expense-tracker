import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const ModalContent = ({ onClose, form }) => {
  return ReactDOM.createPortal(
    <div className="modal-wrapper">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add expense</h5>
            <button
              className="close"
              aria-label="Close Modal"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{form}</div>
        </div>
      </div>
    </div>,
    document.body
  );
};
export default ModalContent;
