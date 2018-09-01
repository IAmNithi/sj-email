import React, { Component } from "react";
import { css, injectGlobal } from "emotion";
import MainNav from "../MainNav/MainNav";
import MainHeader from "../MainHeader/MainHeader";
import { appBg } from "../../theme";
injectGlobal`
  html,body,#root{
    height: 100%;
    width: 100%;
    overflow: hidden;
    padding: 0;
    margin: 0;
  }

  .is-borderless {
    border: none !important;
  }
`;

const root = css`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const app = css`
  display: flex;
  height: 100%;
  overflow: hidden;
  position: relative;
  top: 0;
  width: 100%;
  background-color: ${appBg};
`;

const main = css`
  flex: 1;
  flex-direction: column;
  display: flex;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

class App extends Component {
  render() {
    return (
      <div className={root}>
        <div className={app}>
          <MainNav />
          <main className={main}>
            <MainHeader />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
