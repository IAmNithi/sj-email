import React, { Component } from "react";
import { css } from "emotion";
import { mainNavBg } from "../../theme";

const root = css`
  width: 70px;
  background-color: ${mainNavBg};
`;

class MainNav extends Component {
  render() {
    return <aside className={root} />;
  }
}

export default MainNav;
