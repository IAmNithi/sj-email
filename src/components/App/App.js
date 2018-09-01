import React, { Component } from "react";
import MainNav from "../MainNav/MainNav";
import MainHeader from "../MainHeader/MainHeader";
import "./App.css";
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
