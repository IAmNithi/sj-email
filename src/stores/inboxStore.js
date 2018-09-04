import { computed, observable, action } from "mobx";
import * as orderBy from "lodash.orderby";
class InboxStore {
  year = new Date().getFullYear();
  @observable
  emails = [];
  @observable
  selection = [];
  @observable
  composeModalOpen = false;
  @observable
  composeModalData = {};
  @computed
  get inboxLabels() {
    return [
      "Family",
      "Work",
      "Home",
      "Children",
      "Holidays",
      "Music",
      "Photography",
      "Film"
    ];
  }
  @computed
  get inboxCategories() {
    return [
      {
        label: "Work",
        color: "primary"
      },
      {
        label: "Documents",
        color: "danger"
      },
      {
        label: "Social",
        color: "link"
      },
      {
        label: "Advertising",
        color: "primary"
      },
      {
        label: "Clients",
        color: "warning"
      }
    ];
  }
  @computed
  get inboxFolders() {
    return [
      {
        label: "Inbox",
        icon: "fas fa-inbox"
      },
      {
        label: "Sent Mail",
        icon: "far fa-envelope"
      },
      {
        label: "Important",
        icon: "fas fa-certificate"
      },
      {
        label: "Drafts",
        icon: "far fa-file-alt",
        badge: {
          type: "danger",
          text: "2"
        }
      },
      {
        label: "Trash",
        icon: "far fa-trash-alt"
      }
    ];
  }
  @action.bound
  async getEmails() {
    const data = await import("../data/EmailData.json");
    this.emails = data;
  }
  @computed
  get getEmailsData() {
    const emails = [...this.emails];
    return orderBy(
      emails.map(email => {
        email.read = email.read || false;
        const emailDateTime = window.moment(email.email_date);
        const emailYear = emailDateTime.year();
        if (emailYear < this.year) {
          email.formatted_date = emailDateTime.format("LL");
        } else {
          if (window.moment().diff(emailDateTime, "days") === 0) {
            email.formatted_date = emailDateTime.format("LT");
          } else {
            email.formatted_date = emailDateTime.format("MMMM D");
          }
        }
        if (email.email_category) {
          const catData = email.email_category.split("-");
          email.category = {
            type: catData[1],
            text: catData[0]
          };
        }
        email.selected = this.selection.indexOf(email.id) > -1;
        return email;
      }),
      function(o) {
        return new window.moment(o.email_date).format("YYYYMMDD");
      },
      ["desc"]
    );
  }
  @action.bound
  setEmailRead(ids) {
    const emails = [...this.emails];
    emails.map(email => {
      if (!email.read) {
        if (ids.length) {
          email.read = ids.indexOf(email.id) > -1;
        } else {
          email.read = email.id === ids;
        }
      }
      return email;
    });
    this.emails = emails;
  }
  @computed
  get count() {
    return this.emails.length;
  }
  @computed
  get unreadCount() {
    return this.emails.filter(e => !e.read).length;
  }
  @computed
  get selectionCount() {
    return this.selection.length;
  }
  @action.bound
  updateSelection(id) {
    const itemIdx = this.selection.indexOf(id);
    if (itemIdx > -1) {
      const tempArr = [...this.selection];
      tempArr.splice(itemIdx, 1);
      this.selection = [...tempArr];
    } else {
      this.selection = [...this.selection, id];
    }
  }
  @action.bound
  deleteSelection() {
    if (this.selection.length) {
      const emails = [...this.emails];
      const emailsToKeep = emails.filter(e => {
        return this.selection.indexOf(e.id) === -1;
      });
      this.emails = emailsToKeep;
      this.selection = [];
    }
  }
  @action.bound
  openComposeModal() {
    this.composeModalOpen = true;
  }
  @action.bound
  closeComposeModal() {
    this.composeModalOpen = false;
  }
}

export default new InboxStore();
