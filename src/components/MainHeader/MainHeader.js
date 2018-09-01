import React, { Component } from "react";
import SearchForm from "./SearchForm/SearchForm";
import IconButton from "./IconButton/IconButton";
import "./MainHeader.css";

class MainHeader extends Component {
  render() {
    return (
      <header className="sj-mh">
        <button className="button is-primary sj-mh__menu-btn">
          <span className="fas fa-bars" />
        </button>
        <SearchForm placeholder="Search for something..." />
        <IconButton icon="envelope" badgeType="warning" badgeValue={16} />
        <IconButton icon="bell" badgeType="primary" badgeValue={8} />
        <IconButton icon="sign-out-alt" text="Log out" />
      </header>
    );
  }
}

export default MainHeader;
