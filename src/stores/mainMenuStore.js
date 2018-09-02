import { observable, action } from "mobx";

class MainMenuStore {
  @observable
  appCollapsed = false;
  @observable
  mainMenuCollapsed = false;
  @observable
  mainMenuItems = [];
  @action.bound
  toggleMenuCollapsed() {
    this.mainMenuCollapsed = !this.mainMenuCollapsed;
  }
  @action.bound
  hideApp() {
    this.appCollapsed = true;
  }
  @action.bound
  showApp() {
    this.appCollapsed = false;
  }
  @action.bound
  closeMenu() {
    this.mainMenuCollapsed = true;
  }
  @action.bound
  openMenu() {
    this.mainMenuCollapsed = false;
  }
  @action.bound
  async getMainMenuItems() {
    const data = await import("../data/MainNav.json");
    this.mainMenuItems = data;
  }
  @action.bound
  activateMenuItem(index) {
    const tempItems = [...this.mainMenuItems];
    tempItems.forEach((item, idx) => {
      item.active = false;
      if (idx === index) {
        item.active = true;
      }
    });
    this.mainMenuItems = [...tempItems];
  }
}

export default new MainMenuStore();
