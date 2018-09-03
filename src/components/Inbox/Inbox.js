import React, { Component, Fragment } from "react";
import InboxSidebar from "./InboxSidebar/InboxSidebar";
import InboxMain from "./InboxMain/InboxMain";
import { inject } from "mobx-react";
import "./Inbox.css";
@inject("inboxStore")
class Inbox extends Component {
  componentDidMount() {
    const { inboxStore } = this.props;
    inboxStore.getEmails();
  }
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
