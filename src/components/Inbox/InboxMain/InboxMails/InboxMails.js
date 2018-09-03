import React, { Component } from "react";
import "./InboxMails.css";
import InboxMailItem from "./InboxMailItem/InboxMailItem";
import { observer, inject } from "mobx-react";
@inject("inboxStore")
@observer
class InboxMails extends Component {
  render() {
    const { inboxStore } = this.props;
    return (
      <div className="sj-inbox-mails">
        <div className="sj-inbox-mails-inner">
          <table className="sj-inbox-mails-list" cellPadding="0">
            <colgroup>
              <col className="col-checkbox" />
              <col className="col-name" />
              <col className="col-subject" />
              <col className="col-attachment" />
              <col className="col-datetime" />
            </colgroup>
            <tbody>
              {inboxStore.getEmailsData.map(email => (
                <InboxMailItem
                  selected={email.selected}
                  read={email.read}
                  data={email}
                  key={email.id}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default InboxMails;
