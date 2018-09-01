import { observable } from "mobx";

const mainMenuStore = observable({
  mainMenuCollapsed: true,
  mainMenuItems: []
});

export default mainMenuStore;