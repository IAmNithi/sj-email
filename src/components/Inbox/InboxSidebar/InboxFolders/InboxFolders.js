import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import InlineBadge from "../../../InlineBadge/InlineBadge";
import "./InboxFolders.css";

class InboxFolders extends Component {
  render() {
    const { folders } = this.props;
    return (
      <ul className="sj-inbox-folders">
        {folders.map((folder, idx) => (
          <li key={idx} className="sj-inbox__folder">
            <button className="button is-borderless is-radiusless">
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
