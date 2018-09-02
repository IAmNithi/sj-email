import React, { Component } from "react";
import MainNav from "../MainNav/MainNav";
import MainHeader from "../MainHeader/MainHeader";
import Inbox from "../Inbox/Inbox";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="sj-root">
        <div className="sj-app">
          <MainNav />
          <main className="sj-main">
            <MainHeader />
            <div className="sj-content">
              <Inbox />
            </div>
          </main>
        </div>
        <button className="sj-settings-btn button is-primary">
          <span className="fas fa-cogs" />
        </button>
      </div>
    );
  }
}

export default App;
