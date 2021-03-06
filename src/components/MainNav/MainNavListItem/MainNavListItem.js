import React, { Component } from "react";
import { cx } from "emotion";
import PropTypes from "prop-types";
import "./MainNavListItem.css";
import InlineBadge from "../../InlineBadge/InlineBadge";
import { observer, inject } from "mobx-react";
@inject("inboxStore")
@observer
class MainNavListItem extends Component {
  renderSubNav = children => {
    return children.map((item, index) => (
      <MainNavListItem item={item} key={index} />
    ));
  };
  render() {
    const { item, clickHandler, inboxStore } = this.props;
    return (
      <li
        className={cx(
          "sj-mn__list-item",
          item.active ? "sj-mn__list-item--is-active" : ""
        )}
      >
        <a
          href={item.url}
          title={item.title}
          className="button is-radiusless"
          onClick={clickHandler}
        >
          {/* Check if item has icon */}
          {item.icon ? (
            <span className="icon">
              <i className={item.icon} />
            </span>
          ) : null}
          <span className="text text--fade-in">{item.label}</span>
          {/* Check if item has badge */}
          {item.badge ? (
            <InlineBadge
              className="text--fade-in"
              type={item.badge.type}
              text={item.badge.text}
            />
          ) : null}
          {item.label === "Mailbox" && inboxStore.unreadCount ? (
            <InlineBadge
              className="text--fade-in"
              type="warning"
              text={`${inboxStore.unreadCount.toString()}/${inboxStore.count.toString()}`}
            />
          ) : null}
        </a>
        {item.children && item.children.length ? (
          <ul>{this.renderSubNav(item.children)}</ul>
        ) : null}
      </li>
    );
  }
}

MainNavListItem.propTypes = {
  item: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    badge: PropTypes.shape({
      text: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired
    }),
    active: PropTypes.bool,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    )
  }),
  clickHandler: PropTypes.func
};

export default MainNavListItem;
