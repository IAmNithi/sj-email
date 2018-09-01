import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import SearchForm from "./SearchForm/SearchForm";
import IconButton from "./IconButton/IconButton";
import "./MainHeader.css";
@inject("mainMenuStore")
@observer
class MainHeader extends Component {
  toggleMainMenu = e => {
    e.preventDefault();
    const { mainMenuStore } = this.props;
    mainMenuStore.toggleMenuCollapsed();
  };
  render() {
    return (
      <header className="sj-mh">
        <button
          className="button is-primary sj-mh__menu-btn"
          onClick={this.toggleMainMenu}
        >
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
