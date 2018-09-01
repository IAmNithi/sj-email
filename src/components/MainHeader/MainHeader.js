import React, { Component } from "react";
import { css, cx } from "emotion";
import { mainHeaderBg, mainHeaderBorder, grey3 } from "../../theme";
import SearchForm from "../SearchForm/SearchForm";
const root = css`
  height: 60px;
  border-bottom: 1px solid ${mainHeaderBorder};
  background-color: ${mainHeaderBg};
  padding: 10px 20px 15px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const menuBtn = css`
  padding-left: 13px;
  padding-right: 13px;
`;

const badge = css`
  position: relative;
  overflow: visible;
  font-weight: 600;
  color: ${grey3};
  margin-right: 3px;
  .badge-text {
    position: absolute;
    top: -3px;
    right: 3px;
    min-height: 1rem;
    min-width: 1rem;
    font-size: 0.75rem;
    line-height: 0.5rem;
    color: #fff;
    padding: 0.3rem 5px;
    text-align: center;
    white-space: nowrap;
    border-radius: 3px;
    box-shadow: 0 0 0 0.1rem #fff;
    margin: 0;
  }
`;

class MainHeader extends Component {
  render() {
    return (
      <header className={root}>
        <button className={cx(menuBtn, "button is-primary")}>
          <span className="fas fa-bars" />
        </button>
        <SearchForm placeholder="Search for something..."/>
        <button className={cx("button is-borderless", badge)}>
          <span className="icon is-marginless">
            <i className="fas fa-envelope" />
          </span>
          <span className="badge-text has-background-warning">16</span>
        </button>
        <button className={cx("button is-borderless", badge)}>
          <span className="icon is-marginless">
            <i className="fas fa-bell" />
          </span>
          <span className="badge-text has-background-primary">8</span>
        </button>
        <button className={cx("button is-borderless", badge)}>
          <span className="icon is-marginless">
            <i className="fas fa-sign-out-alt" />
          </span>
          <span>Log out</span>
        </button>
      </header>
    );
  }
}

export default MainHeader;
