import { computed, observable, action, reaction } from "mobx";
import * as store from "store";
import * as orderBy from "lodash.orderby";
class InboxStore {
  year = new Date().getFullYear();
  userFirstName = "David";
  userLastName = "Williams";
  userEmail = "d_williams@sahajsoft.com";
  @observable
  emails = [];
  @observable
  selection = [];
  @observable
  composeModalOpen = false;
  @observable
  itemModalOpen = false;
  @observable
  itemModalData = {};
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
    const emails = store.get("sj.emails");
    if (emails) {
      this.emails = emails;
    } else {
      const data = await import("../data/EmailData.json");
      this.emails = data;
    }
  }
  @computed
  get getEmailsData() {
    const emails = [];
    this.emails.forEach(email => {
      const computedData = Object.assign({}, email, {
        read: email.read || false,
        selected: this.selection.indexOf(email.id) > -1
      });
      const emailDateTime = window.moment(email.email_date);
      const emailYear = emailDateTime.year();
      if (emailYear < this.year) {
        computedData.formatted_date = emailDateTime.format("LL");
      } else {
        if (window.moment().diff(emailDateTime, "days") === 0) {
          computedData.formatted_date = emailDateTime.format("LT");
        } else {
          computedData.formatted_date = emailDateTime.format("MMMM D");
        }
      }
      if (computedData.email_category) {
        const catData = email.email_category.split("-");
        computedData.category = {
          type: catData[1],
          text: catData[0]
        };
      }
      emails.push(computedData);
    });
    return orderBy(
      emails,
      function(o) {
        return new window.moment(o.email_date);
      },
      ["desc"]
    );
  }
  @action.bound
  setEmailRead(ids) {
    const emails = [...this.emails];
    emails.map(email => {
      if (!email.read) {
        if (typeof ids === "number") {
          email.read = email.id === ids;
        } else {
          email.read = ids.indexOf(email.id) > -1;
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
  @action.bound
  openItemModal() {
    this.itemModalOpen = true;
  }
  @action.bound
  closeItemModal() {
    this.itemModalOpen = false;
  }
  @action.bound
  setItemModalData(data) {
    console.log(data);
    this.itemModalData = data;
    this.openItemModal();
    this.setEmailRead(data.id);
  }
  @action.bound
  addMail(data) {
    const mailData = Object.assign({}, data, {
      first_name: this.userFirstName,
      last_name: this.userLastName,
      email_from: this.userEmail,
      id: Date.now(),
      email_date: Date.now()
    });
    this.emails = [...this.emails, mailData];
    this.closeComposeModal();
  }
  emailsUpdated = reaction(
    () => this.emails,
    emails => store.set("sj.emails", emails)
  );
}

export default new InboxStore();
