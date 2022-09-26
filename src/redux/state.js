import { rerenderEntireTree } from "../render";

let state = {
  sideBar: {
    friendsData: [
      { name: "Leha", avatar: "url123", id: 1 },
      { name: "Vlad", avatar: "url123", id: 2 },
      { name: "Nick", avatar: "url123", id: 3 },
    ],
  },
  postsData: [
    { name: "Max", age: "22", likes: "11", id: 1 },
    { name: "Nick", age: "25", likes: "22", id: 2 },
    { name: "Alice", age: "21", likes: "33", id: 3 },
    { name: "Alex", age: "56", likes: "44", id: 4 },
  ],
  newPostText: "Hello its state",
  dialogsData: [
    { id: 1, name: "Max" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Ali" },
    { id: 4, name: "Baba" },
  ],
  messagesData: [
    { id: 1, message: "Hello" },
    { id: 2, message: "Hi", user: true },
    { id: 3, message: "How are you?" },
    { id: 4, message: "I`m fine", user: true },
  ],
};

export let addPost = () => {
  let newPost = {
    name: state.newPostText,
    age: "0",
    likes: "0",
    id: 5,
  };

  state.postsData.push(newPost);
  state.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
