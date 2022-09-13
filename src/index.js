import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

let postsData = [
  { name: "Max", age: "22", likes: "11", id: 1 },
  { name: "Nick", age: "25", likes: "22", id: 2 },
  { name: "Alice", age: "21", likes: "33", id: 3 },
  { name: "Alex", age: "56", likes: "44", id: 4 },
];
let dialogsData = [
  { id: 1, name: "Max" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Ali" },
  { id: 4, name: "Baba" },
];
let messagesData = [
  { id: 1, message: "Hello" },
  { id: 2, message: "Hi" },
  { id: 3, message: "How are you?" },
  { id: 4, message: "I`m fine" },
];

root.render(
  <BrowserRouter>
    <App
      postsData={postsData}
      dialogsData={dialogsData}
      messagesData={messagesData}
    />
  </BrowserRouter>
);
