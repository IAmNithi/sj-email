import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { cx } from "emotion";
import MainNavListItem from "./MainNavListItem/MainNavListItem";
import "./MainNav.css";
@inject("mainMenuStore")
@inject("userStore")
@observer
class MainNav extends Component {
  activateItem = index => e => {
    e.preventDefault();
    const { mainMenuStore } = this.props;
    mainMenuStore.activateMenuItem(index);
  };
  componentDidMount() {
    const { mainMenuStore } = this.props;
    mainMenuStore.getMainMenuItems();
  }
  render() {
    const { mainMenuStore, userStore } = this.props;
    return (
      <aside
        className={cx(
          "sj-mn",
          mainMenuStore.mainMenuCollapsed ? "" : "sj-mn--expanded"
        )}
        role="navigation"
      >
        <nav className="sj-mn__nav">
          {!mainMenuStore.mainMenuCollapsed ? (
            <section className="sj-mn-user">
              <div className="sj-mn-user__img">
                <img
                  src={userStore.user.thumbnail}
                  alt={userStore.user.fullName}
                />
              </div>
              <span className="sj-mn-user__name">
                {userStore.user.fullName}
              </span>
              <span className="sj-mn-user__designation">
                {userStore.user.designation}
                <span className="fas fa-sort-down" />
              </span>
            </section>
          ) : (
            <section className="sj-mn-logo">IN+</section>
          )}
          <ul className="sj-mn__list">
            {mainMenuStore.mainMenuItems.map((item, index) => (
              <MainNavListItem
                item={item}
                key={index}
                clickHandler={this.activateItem(index)}
              />
            ))}
          </ul>
        </nav>
      </aside>
    );
  }
}

export default MainNav;
