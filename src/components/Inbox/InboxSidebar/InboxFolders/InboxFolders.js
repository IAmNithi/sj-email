import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import InlineBadge from "../../../InlineBadge/InlineBadge";
import "./InboxFolders.css";
import { observer, inject } from "mobx-react";
@inject("inboxStore")
@observer
class InboxFolders extends Component {
  render() {
    const { folders, inboxStore } = this.props;
    return (
      <ul className="sj-inbox-folders">
        {folders.map((folder, idx) => (
          <li key={idx} className="sj-inbox__folder">
            <button
              className="button is-borderless is-radiusless"
              title={folder.label}
            >
              <span className={cx("sj-inbox__folder-icon", `${folder.icon}`)} />
              <span className="sj-inbox__folder-text">{folder.label}</span>
              {/* Check if folder has badge */}
              {folder.badge ? (
                <InlineBadge
                  className="text--fade-in"
                  type={folder.badge.type}
                  text={folder.badge.text}
                />
              ) : null}
              {folder.label === "Inbox" && inboxStore.unreadCount ? (
                <InlineBadge
                  className="text--fade-in"
                  type="warning"
                  text={inboxStore.unreadCount.toString()}
                />
              ) : null}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
InboxFolders.propTypes = {
  folders: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired
    })
  ).isRequired
};

export default InboxFolders;
