import React, { Component, Fragment } from "react";
import InboxSidebar from "./InboxSidebar/InboxSidebar";
import InboxMain from "./InboxMain/InboxMain";
import { inject, observer } from "mobx-react";
import "./Inbox.css";
import InboxComposeModal from "./InboxComposeModal/InboxComposeModal";
@inject("inboxStore")
@observer
class Inbox extends Component {
  componentDidMount() {
    const { inboxStore } = this.props;
    inboxStore.getEmails();
  }
  render() {
    const { inboxStore } = this.props;
    return (
      <Fragment>
        <InboxSidebar />
        <InboxMain />
        <InboxComposeModal
          write={false}
          data={inboxStore.composeModalData}
          isOpen={inboxStore.composeModalOpen}
          closeCb={inboxStore.closeComposeModal}
          title={"New Message"}
        />
      </Fragment>
    );
  }
}

export default Inbox;
