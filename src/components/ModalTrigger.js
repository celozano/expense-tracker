import React from "react";

const ModalTrigger = ({ onOpen, text }) => (
  <button className="btn btn-primary" onClick={onOpen}>
    {text}
  </button>
);

export default ModalTrigger;
