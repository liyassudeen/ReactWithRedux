import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import TodoList from "./task/todoList/todoList";
import { store } from "./task/todoList/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  rootElement
);
