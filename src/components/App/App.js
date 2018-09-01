import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import MainNav from "../MainNav/MainNav";
import MainHeader from "../MainHeader/MainHeader";
import "./App.css";
@inject('mainMenuStore')
class App extends Component {
  render() {
    return (
      <div className="sj-root">
        <div className="sj-app">
          <MainNav />
          <main className="sj-main">
            <MainHeader />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
