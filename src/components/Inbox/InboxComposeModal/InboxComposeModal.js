import React, { Component } from "react";
import Modal from "react-modal";
import "./InboxComposeModal.css";
import PropTypes from "prop-types";
Modal.setAppElement("#root");

const customComposeModalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)"
  }
};

class InboxComposeModal extends Component {
  render() {
    const { isOpen, closeCb, title } = this.props;
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
          <form>
            <div className="sj-compose-modal__fields">
              <div class="field has-addons">
                <div class="control">
                  <span class="button is-static">To:</span>
                </div>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="test@gmail.com"
                  />
                </div>
              </div>
              <div class="field has-addons">
                <div class="control">
                  <span class="button is-static">Cc:</span>
                </div>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="test@gmail.com"
                  />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input class="input" type="text" placeholder="Subject" />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <textarea class="textarea" placeholder="Message" rows="10" />
                </div>
              </div>
            </div>
            <div className="sj-compose-modal__actions">
              <button type="submit" className="button is-primary" title="Send">
                Send Mail
              </button>
              <span className="flex" />
              <button type="button" className="button" title="Delete Message">
                <span className="icon is-small">
                  <i className="far fa-trash-alt" />
                </span>
              </button>
            </div>
          </form>
        </section>
      </Modal>
    );
  }
}

InboxComposeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeCb: PropTypes.func,
  title: PropTypes.string.isRequired,
  write: PropTypes.bool,
  data: PropTypes.any.isRequired
};

export default InboxComposeModal;
