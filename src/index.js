import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

//Task - todoList
import TodoList from "./task/todoList/todoList";
import { store } from "./task/todoList/store";

//Task - googleAuth
/*import GoogleAuth from "./task/googleAuth/googleAuth";
import { store } from "./task/googleAuth/store";*/

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  rootElement
);
