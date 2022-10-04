import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import {
  addMessage,
  addPost,
  subscribe,
  updateNewMessageText,
  updateNewPostText,
} from "./redux/state";
import state from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = () => {
  root.render(
    <BrowserRouter>
      <App
        data={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewMessageText={updateNewMessageText}
      />
    </BrowserRouter>
  );
};
rerenderEntireTree(state);

subscribe(rerenderEntireTree);
