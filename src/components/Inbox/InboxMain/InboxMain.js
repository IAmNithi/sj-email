import React, { Component } from "react";
import "./InboxMain.css";
import InboxHeader from "./InboxHeader/InboxHeader";
class InboxMain extends Component {
  render() {
    return (
      <div className="sj-inbox-main">
        <InboxHeader />
      </div>
    );
  }
}

export default InboxMain;
