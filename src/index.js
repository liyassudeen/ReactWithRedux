import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import TodoList from "./task/todoList/todoList";
//import { store } from "./task/todoList/store";

import GoogleAuth from "./task/googleAuth/googleAuth";
import { store } from "./task/googleAuth/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <GoogleAuth />
  </Provider>,
  rootElement
);
