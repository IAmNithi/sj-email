import React, { Component } from "react";
import PropTypes from "prop-types";
import "./InboxCategories.css";
import { cx } from "emotion";

class InboxCategories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <ul className="sj-inbox-categories">
        {categories.map((category, idx) => (
          <li key={idx} className="sj-inbox__category">
            <button className="button is-borderless is-radiusless" title={category.label}>
              <span className={cx("sj-inbox__category-color", `has-background-${category.color}`)}/>
              {category.label}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
InboxCategories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  ).isRequired
};

export default InboxCategories;
