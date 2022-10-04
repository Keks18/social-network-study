let rerenderEntireTree = () => {
  console.log("state changed");
};

let state = {
  sideBar: {
    friendsData: [
      { name: "Leha", avatar: "url123", id: 1 },
      { name: "Vlad", avatar: "url123", id: 2 },
      { name: "Nick", avatar: "url123", id: 3 },
    ],
  },
  profile: {
    postsData: [
      { name: "Max", age: "22", likes: "11", id: 1 },
      { name: "Nick", age: "25", likes: "22", id: 2 },
      { name: "Alice", age: "21", likes: "33", id: 3 },
      { name: "Alex", age: "56", likes: "44", id: 4 },
    ],
    newPostText: "Hello its state",
  },
  dialogs: {
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
    newMessageText: "Hi, what do you want to hear?",
  },
};

export const addPost = () => {
  let newPost = {
    name: state.profile.newPostText,
    age: "0",
    likes: "0",
    id: 5,
  };

  state.profile.postsData.push(newPost);
  state.profile.newPostText = "";
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profile.newPostText = newText;
  rerenderEntireTree(state);
};

export const addMessage = () => {
  let newMessage = { id: 5, message: state.dialogs.newMessageText };

  state.dialogs.messagesData.push(newMessage);
  state.dialogs.newMessageText = "";
  rerenderEntireTree(state);
};

export const updateNewMessageText = (newMessage) => {
  state.dialogs.newMessageText = newMessage;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
