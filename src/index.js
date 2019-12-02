import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer";
import StrikeOut from "./StrikeOut";

import "./styles.scss";

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrikeOut />
  </Provider>,
  rootElement
);
