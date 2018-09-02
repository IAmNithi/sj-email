import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
// Normalize CSS
import "normalize-css";
// Bulma CSS
import "./assets/sass/bulma.css";
import App from "./components/App/App";
import mainMenuStore from "./stores/mainMenuStore";
import userStore from './stores/userStore';
import inboxStore from './stores/inboxStore';
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider mainMenuStore={mainMenuStore} userStore={userStore} inboxStore={inboxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
