import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./task/todoList/store/reducer";
import TodoList from "./task/todoList/todoList";

import "./styles.scss";

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  rootElement
);
