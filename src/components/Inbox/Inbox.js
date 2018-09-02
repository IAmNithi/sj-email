import React, { Component, Fragment } from "react";
import InboxSidebar from "./InboxSidebar/InboxSidebar";
import InboxMain from "./InboxMain/InboxMain";
import "./Inbox.css";
class Inbox extends Component {
  render() {
    return (
      <Fragment>
        <InboxSidebar />
        <InboxMain />
      </Fragment>
    );
  }
}

export default Inbox;
