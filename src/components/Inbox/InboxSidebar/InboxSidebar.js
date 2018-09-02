import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { cx } from "emotion";
import "./InboxSidebar.css";
import InboxLabels from "./InboxLabels/InboxLabels";
import InboxCategories from "./InboxCategories/InboxCategories";
import InboxFolders from "./InboxFolders/InboxFolders";
@inject("mainMenuStore")
@inject("inboxStore")
@observer
class InboxSidebar extends Component {
  render() {
    const { mainMenuStore, inboxStore } = this.props;
    return (
      <aside
        className={cx(
          "sj-inbox-sidebar",
          mainMenuStore.mainMenuCollapsed ? "sj-inbox-sidebar--expanded" : ""
        )}
      >
        <button className="sj-inbox-sidebar__compose button is-primary">
          Compose Mail
        </button>
        <div className="sj-inbox-sidebar-inner">
          <ul>
            <li>
              <span>Folders</span>
              <InboxFolders folders={inboxStore.inboxFolders} />
            </li>
            <li>
              <span>Categories</span>
              <InboxCategories categories={inboxStore.inboxCategories} />
            </li>
            <li>
              <span>Labels</span>
              <InboxLabels labels={inboxStore.inboxLabels} />
            </li>
          </ul>
        </div>
      </aside>
    );
  }
}

export default InboxSidebar;
