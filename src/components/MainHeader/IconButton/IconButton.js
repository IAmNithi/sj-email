import React, { Component } from "react";
import PropTypes from "prop-types";
import { cx } from "emotion";
import "./IconButton.css";

class IconButton extends Component {
  /**
   *Function to check if the icon button has badge
   */
  hasBadge = () => {
    const { badgeType, badgeValue } = this.props;
    return badgeType && badgeValue;
  };
  /**
   * Function to get the badge type
   */
  getBadgeType = () => {
    const { badgeType } = this.props;
    return `has-background-${badgeType}`;
  };
  render() {
    const { badgeValue, icon, text } = this.props;
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
        {/* Check if button has badge and render appropriately */}
        {this.hasBadge() ? (
          <span className={cx("sj-mh__icon-btn-text", this.getBadgeType())}>
            {badgeValue}
          </span>
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
  badgeValue: PropTypes.number
};

export default IconButton;
