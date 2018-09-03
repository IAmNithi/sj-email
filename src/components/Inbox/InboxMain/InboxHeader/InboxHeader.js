import React, { Component } from "react";
import "./InboxHeader.css";
import { toast } from "react-toastify";
import { observer, inject } from "mobx-react";
@inject("inboxStore")
@observer
class InboxHeader extends Component {
  showNoSelectionMsg = () => {
    toast.info("No emails selected!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false
    });
  };
  markMailsRead = () => {
    const { inboxStore } = this.props;
    if (inboxStore.selectionCount) {
      inboxStore.setEmailRead(inboxStore.selection);
      toast.success("Selected emails marked read!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false
      });
    } else {
      this.showNoSelectionMsg();
    }
  };
  deleteEmails = () => {
    const { inboxStore } = this.props;
    if (inboxStore.selectionCount) {
      inboxStore.deleteSelection();
      toast.success("Selected emails deleted!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false
      });
    } else {
      this.showNoSelectionMsg();
    }
  };
  render() {
    const { inboxStore } = this.props;
    return (
      <section className="sj-inbox-header">
        <div className="sj-inbox-header-search">
          <h1 className="subtitle">
            Inbox{" "}
            {inboxStore.unreadCount ? (
              <span>({inboxStore.unreadCount})</span>
            ) : null}
          </h1>
          <span className="flex" />
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Find a repository"
              />
            </div>
            <div className="control">
              <button className="button is-primary">Search</button>
            </div>
          </div>
        </div>
        <div className="sj-inbox-header-actions">
          <button className="button">
            <span className="icon is-small">
              <i className="fas fa-sync-alt" />
            </span>
            <span>Refresh</span>
          </button>
          <button
            className="button"
            title="Mark Read"
            onClick={this.markMailsRead}
          >
            <span className="icon is-small">
              <i className="far fa-eye" />
            </span>
          </button>
          <button className="button" title="Mark Important">
            <span className="icon is-small">
              <i className="fas fa-exclamation" />
            </span>
          </button>
          <button className="button" title="Delete" onClick={this.deleteEmails}>
            <span className="icon is-small">
              <i className="far fa-trash-alt" />
            </span>
          </button>
          <span className="flex" />
          <div className="field has-addons">
            <div className="control">
              <button className="button" title="Previous">
                <span className="icon is-small">
                  <i className="fas fa-arrow-left" />
                </span>
              </button>
            </div>
            <div className="control">
              <button className="button" title="Next">
                <span className="icon is-small">
                  <i className="fas fa-arrow-right" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default InboxHeader;
