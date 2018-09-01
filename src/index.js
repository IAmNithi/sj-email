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
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider mainMenuStore={mainMenuStore} userStore={userStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
