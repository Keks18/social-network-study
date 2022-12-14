import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App data={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>
  );
};
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
