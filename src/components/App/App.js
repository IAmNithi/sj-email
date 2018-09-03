import React, { Component, Fragment } from "react";
import * as debounce from "lodash.debounce";
import { observer, inject } from "mobx-react";
import MainNav from "../MainNav/MainNav";
import MainHeader from "../MainHeader/MainHeader";
import Inbox from "../Inbox/Inbox";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

@inject("mainMenuStore")
@observer
class App extends Component {
  /**
   * Function to add event listeners in pure JS
   * @param {*} object
   * @param {*} type
   * @param {*} callback
   */
  addEvent(object, type, callback) {
    if (object == null || typeof object === "undefined") return;
    if (object.addEventListener) {
      object.addEventListener(type, callback, false);
    } else if (object.attachEvent) {
      object.attachEvent("on" + type, callback);
    } else {
      object["on" + type] = callback;
    }
  }
  /**
   * Function to close the main menu when the viewport is tablets
   */
  closeMenuForTablets() {
    const { mainMenuStore } = this.props;
    if (window.matchMedia("(max-width: 1023px)").matches) {
      mainMenuStore.closeMenu();
    }
  }
  hideAppForSmallDevices() {
    const { mainMenuStore } = this.props;
    if (window.matchMedia("(max-width: 767px)").matches) {
      mainMenuStore.hideApp();
    } else {
      mainMenuStore.showApp();
    }
  }
  componentDidMount() {
    this.closeMenuForTablets();
    this.hideAppForSmallDevices();
    const debounced = debounce(() => {
      this.closeMenuForTablets();
      this.hideAppForSmallDevices();
    }, 300);
    this.addEvent(window, "resize", debounced);
  }
  render() {
    const { mainMenuStore } = this.props;
    return (
      <div className="sj-root">
        {mainMenuStore.appCollapsed ? (
          <section className="sj-not-compatible">
            <div className="sj-not-compatible-inner">
              <h1>IN+</h1>
              <p>
                App is not compatible with your device. <br />
                Please use a laptop or desktop for best experience.
              </p>
            </div>
          </section>
        ) : (
          <Fragment>
            <div className="sj-app">
              <MainNav />
              <div className="sj-main">
                <MainHeader />
                <main className="sj-content" role="main">
                  <Inbox />
                </main>
              </div>
            </div>
            <button className="sj-settings-btn button is-primary">
              <span className="fas fa-cogs" />
            </button>
            <ToastContainer
              position="bottom-right"
              autoClose={2000}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange={false}
              draggable={false}
              pauseOnHover={false}
            />
          </Fragment>
        )}
      </div>
    );
  }
}

export default App;
