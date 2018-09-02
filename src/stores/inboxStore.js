import { computed } from "mobx";
class InboxStore {
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
        icon: "fas fa-inbox",
        badge:{
          type: "warning",
          text: "16"
        }
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
        badge:{
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
}

export default new InboxStore();
