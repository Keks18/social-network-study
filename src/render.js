import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { addPost } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App data={state} addPost={addPost} />
    </BrowserRouter>
  );
};
addPost("Hello mrsv");
