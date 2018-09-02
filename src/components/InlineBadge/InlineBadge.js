import React, { Component } from "react";
import PropTypes from "prop-types";

import "./InlineBadge.css";
import { cx } from "emotion";
class InlineBadge extends Component {
  render() {
    const { text, type, className } = this.props;
    return (
      <span
        className={cx("sj-inline-badge", `has-background-${type}`, className)}
      >
        {text}
      </span>
    );
  }
}

InlineBadge.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string
};

InlineBadge.defaultProps = {
  text: "",
  type: "primary"
};
export default InlineBadge;
