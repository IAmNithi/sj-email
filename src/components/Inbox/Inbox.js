import React, { Component, Fragment } from "react";
import InboxSidebar from "./InboxSidebar/InboxSidebar";
import "./Inbox.css";
class Inbox extends Component {
  render() {
    return (
      <Fragment>
        <InboxSidebar />
        <section className="sj-inbox-main" />
      </Fragment>
    );
  }
}

export default Inbox;
