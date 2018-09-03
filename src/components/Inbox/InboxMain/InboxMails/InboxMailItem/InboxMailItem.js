import React, { Component } from "react";
import "./InboxMailItem.css";
import { cx } from "emotion";
import InlineBadge from "../../../../InlineBadge/InlineBadge";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
@inject("inboxStore")
@observer
class InboxMailItem extends Component {
  toggleSelection = id => e => {
    e.preventDefault();
    e.stopPropagation();
    const { inboxStore } = this.props;
    inboxStore.updateSelection(id);
  };
  showMail = id => e => {
    e.preventDefault();
    e.stopPropagation();
    const { inboxStore } = this.props;
    inboxStore.setEmailRead(id);
  };
  render() {
    const { data, read,selected } = this.props;
    return (
      <tr
        className={cx(
          "sj-inbox-mails-list__item",
          read ? null : "sj-inbox-mails-list__item--unread"
        )}
        onClick={this.showMail(data.id)}
      >
        <td className="td-checkbox">
          <div className="td-inner td-inner--checkbox">
            <div
              className={cx(
                "item-select",
                selected ? "item-select--selected" : ""
              )}
              role="checkbox"
              aria-checked="false"
              onClick={this.toggleSelection(data.id)}
            >
              <span
                className={cx(
                  selected ? "fas fa-check-square" : "far fa-square"
                )}
              />
            </div>
          </div>
        </td>
        <td className="td-name">
          <div className="td-inner td-inner--name">
            <span>
              {data.first_name} {data.last_name}
            </span>
            {data.email_category ? (
              <InlineBadge
                type={data.category.type}
                text={data.category.text}
              />
            ) : null}
          </div>
        </td>
        <td className="td-subject">
          <div className="td-inner td-inner--subject">
            <span>{data.email_subject}</span>
          </div>
        </td>
        <td className="td-attachment">
          <div className="td-inner td-inner--attachment">
            {data.email_attachment ? (
              <span className="fas fa-paperclip" />
            ) : (
              <span>&nbsp;</span>
            )}
          </div>
        </td>
        <td className="td-datetime">
          <div className="td-inner td-inner--datetime">
            <span>{data.formatted_date}</span>
          </div>
        </td>
      </tr>
    );
  }
}
InboxMailItem.propTypes = {
  data: PropTypes.any.isRequired,
  read: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired
};
export default InboxMailItem;
