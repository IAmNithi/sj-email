import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import SearchForm from "./SearchForm/SearchForm";
import IconButton from "./IconButton/IconButton";
import "./MainHeader.css";
@inject("mainMenuStore")
@inject("inboxStore")
@observer
class MainHeader extends Component {
  toggleMainMenu = e => {
    e.preventDefault();
    const { mainMenuStore } = this.props;
    mainMenuStore.toggleMenuCollapsed();
  };
  render() {
    const { inboxStore } = this.props;
    return (
      <header className="sj-mh">
        <button
          className="button is-primary sj-mh__menu-btn"
          onClick={this.toggleMainMenu}
        >
          <span className="fas fa-bars" />
        </button>
        <SearchForm placeholder="Search for something..." />
        {inboxStore.unreadCount ? (
          <IconButton
            icon="envelope"
            badgeType="warning"
            badgeValue={inboxStore.unreadCount.toString()}
          />
        ) : (
          <IconButton icon="envelope" />
        )}

        <IconButton icon="bell" badgeType="primary" badgeValue="8" />
        <IconButton icon="sign-out-alt" text="Log out" />
      </header>
    );
  }
}

export default MainHeader;
