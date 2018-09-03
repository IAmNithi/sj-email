import React, { Component } from "react";
import "./InboxMain.css";
import InboxHeader from "./InboxHeader/InboxHeader";
import InboxMails from "./InboxMails/InboxMails";
class InboxMain extends Component {
  render() {
    return (
      <div className="sj-inbox-main">
        <InboxHeader />
        <InboxMails />
      </div>
    );
  }
}

export default InboxMain;
