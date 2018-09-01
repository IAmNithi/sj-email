import React, { Component } from "react";
import MainNavListItem from "./MainNavListItem/MainNavListItem";
import "./MainNav.css";
import data from "../../data/MainNav.json";
class MainNav extends Component {
  render() {
    return (
      <aside className="sj-mn">
        <nav className="sj-mn__nav">
          <ul className="sj-mn__list">
            {data.map((item, index) => (
              <MainNavListItem item={item} key={index} />
            ))}
          </ul>
        </nav>
      </aside>
    );
  }
}

export default MainNav;
