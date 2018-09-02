import React, { Component } from "react";
import PropTypes from "prop-types";
import "./InboxLabels.css";

class InboxLabels extends Component {
  render() {
    const { labels } = this.props;
    return (
      <div className="tags sj-inbox-labels">
        {labels.map((label, idx) => (
          <button className="tag sj-inbox__label" key={idx}>
            <span className="fas fa-tag" />
            {label}
          </button>
        ))}
      </div>
    );
  }
}
InboxLabels.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default InboxLabels;
