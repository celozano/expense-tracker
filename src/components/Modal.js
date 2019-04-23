import React, { Component, Fragment } from "react";

import ModalTrigger from "./ModalTrigger";
import ModalContent from "./ModalContent";

class Modal extends Component {
  onOpen = () => {
    this.props.onOpen();
  };

  onClose = () => {
    this.props.onClose();
  };

  render() {
    const { isOpen } = this.props;
    const { triggerText } = this.props;
    return (
      <div className="mx-auto">
        <Fragment>
          <ModalTrigger onOpen={this.onOpen} text={triggerText} />
          {isOpen && (
            <ModalContent onClose={this.onClose} form={this.props.children} />
          )}
        </Fragment>
      </div>
    );
  }
}

export default Modal;
