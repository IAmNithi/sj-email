import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import MainNavListItem from "./MainNavListItem/MainNavListItem";
import "./MainNav.css";
import { cx } from "emotion";
@inject("mainMenuStore")
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
    const { mainMenuStore } = this.props;
    return (
      <aside
        className={cx(
          "sj-mn",
          mainMenuStore.mainMenuCollapsed ? "" : "sj-mn--expanded"
        )}
      >
        <nav className="sj-mn__nav">
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
