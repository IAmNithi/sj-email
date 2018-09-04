import React, { Component } from "react";
import Modal from "react-modal";
import PropTypes from "prop-types";
import "./InboxItemModal.css";

Modal.setAppElement("#root");

const customComposeModalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.4)"
  }
};

class InboxComposeModal extends Component {
  getFormattedDate = (datetime) => {
    return window.moment(datetime).format('MMMM Do YYYY, h:mm a');
  }
  render() {
    const { isOpen, closeCb, data } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        contentLabel={data.email_subject}
        className="sj-item-modal"
        style={customComposeModalStyles}
      >
        <header className="sj-item-modal__header">
          <h3>
            <span>{data.email_subject}</span>
          </h3>
          <button
            className="button is-borderless"
            onClick={closeCb}
            title="Close"
          >
            <span className="fas fa-times" />
          </button>
        </header>
        <section className="sj-item-modal__body">
          <table className="table is-bordered">
            <tbody>
              <tr>
                <th>When:</th>
                <td>
                  {this.getFormattedDate(data.email_date)}
                </td>
              </tr>
              <tr>
                <th>From:</th>
                <td>
                  {data.first_name} {data.last_name} &lt;
                  {data.email_from}
                  &gt;
                </td>
              </tr>
              <tr>
                <th>To:</th>
                <td>{data.email_to}</td>
              </tr>
              {data.email_cc ? (
                <tr>
                  <th>Cc:</th>
                  <td>{data.email_cc}</td>
                </tr>
              ) : null}
              <tr>
                <th>Subject:</th>
                <td>{data.email_subject}</td>
              </tr>
              <tr>
                <th>&nbsp;</th>
                <td>
                  <pre>{data.email_body}</pre>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </Modal>
    );
  }
}

InboxComposeModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeCb: PropTypes.func,
  data: PropTypes.any.isRequired
};

export default InboxComposeModal;
