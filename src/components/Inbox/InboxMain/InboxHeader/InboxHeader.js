import React, { Component } from "react";
import "./InboxHeader.css";
class InboxHeader extends Component {
  render() {
    return (
      <section className="sj-inbox-header">
        <div className="sj-inbox-header-search">
          <h1 className="subtitle">Inbox (16)</h1>
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
          <button className="button">
            <span className="icon is-small">
              <i className="far fa-eye" />
            </span>
          </button>
          <button className="button">
            <span className="icon is-small">
              <i className="fas fa-exclamation" />
            </span>
          </button>
          <button className="button">
            <span className="icon is-small">
              <i className="far fa-trash-alt" />
            </span>
          </button>
          <span className="flex" />
          <div className="field has-addons">
            <div className="control">
              <button className="button">
                <span className="icon is-small">
                  <i className="fas fa-arrow-left" />
                </span>
              </button>
            </div>
            <div className="control">
              <button className="button">
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
