import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { addPost, updateNewPostText } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App
        data={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
    </BrowserRouter>
  );
};
