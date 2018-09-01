import { observable } from "mobx";
import userImg from "../assets/images/sj-user.png";
class UserStore {
  @observable
  user = {
    userName: "dwilliams",
    fullName: "David Williams",
    designation: "Art Director",
    thumbnail: userImg
  };
}

export default new UserStore();
