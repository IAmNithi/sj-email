import React, { Component, Fragment } from "react";
import InboxSidebar from "./InboxSidebar/InboxSidebar";
import InboxMain from "./InboxMain/InboxMain";
import { inject, observer } from "mobx-react";
import "./Inbox.css";
import InboxComposeModal from "./InboxComposeModal/InboxComposeModal";
import InboxItemModal from "./InboxItemModal/InboxItemModal";
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
          isOpen={inboxStore.composeModalOpen}
          closeCb={inboxStore.closeComposeModal}
          submitCb={inboxStore.addMail}
          title={"New Message"}
        />
        <InboxItemModal
          isOpen={inboxStore.itemModalOpen}
          closeCb={inboxStore.closeItemModal}
          data={inboxStore.itemModalData}
        />
      </Fragment>
    );
  }
}

export default Inbox;
