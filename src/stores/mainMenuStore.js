import { observable, action } from "mobx";

class MainMenuStore {
  @observable
  mainMenuCollapsed = false;
  @observable
  mainMenuItems = [];
  @action.bound
  toggleMenuCollapsed() {
    this.mainMenuCollapsed = !this.mainMenuCollapsed;
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
