import React, { Component } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import InboxComposeForm from "./InboxComposeForm/InboxComposeForm";
import "./InboxComposeModal.css";

Modal.setAppElement("#root");

const customComposeModalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)"
  }
};

class InboxComposeModal extends Component {
  render() {
    const { isOpen, closeCb, title, submitCb } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        contentLabel={title}
        className="sj-compose-modal"
        style={customComposeModalStyles}
      >
        <header className="sj-compose-modal__header">
          <h3>{title}</h3>
          <button
            className="button is-borderless"
            onClick={closeCb}
            title="Close"
          >
            <span className="fas fa-times" />
          </button>
        </header>
        <section className="sj-compose-modal__body">
          <InboxComposeForm submitCb={submitCb} closeCb={closeCb}/>
        </section>
      </Modal>
    );
  }
}

InboxComposeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeCb: PropTypes.func,
  submitCb: PropTypes.func,
  title: PropTypes.string.isRequired
};

export default InboxComposeModal;
