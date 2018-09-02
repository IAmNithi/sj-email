import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import "./IconButton.css";
import InlineBadge from "../../InlineBadge/InlineBadge";
class IconButton extends Component {
  /**
   *Function to check if the icon button has badge
   */
  hasBadge = () => {
    const { badgeType, badgeValue } = this.props;
    return badgeType && badgeValue;
  };
  render() {
    const { badgeValue, badgeType, icon, text } = this.props;
    return (
      <button
        className={cx(
          "sj-mh__icon-btn button is-borderless",
          this.hasBadge() ? "sj-mh__icon-btn--badge" : ""
        )}
      >
        <span className="icon is-marginless">
          <i className={cx("fas", `fa-${icon}`)} />
        </span>
        {/* Check if button has text */}
        {text ? <span>{text}</span> : null}
        {/* Check if button has badge */}
        {this.hasBadge() ? (
          <InlineBadge type={badgeType} text={badgeValue} />
        ) : null}
      </button>
    );
  }
}

IconButton.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  badgeType: PropTypes.oneOf([
    "primary",
    "warning",
    "link",
    "info",
    "success",
    "danger"
  ]),
  badgeValue: PropTypes.string
};

export default IconButton;
