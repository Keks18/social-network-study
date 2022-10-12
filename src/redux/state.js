import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sideBarReducer from "./sidebar-reducer";

let store = {
  state: {
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
  },
  rerenderEntireTree() {
    console.log("state changed");
  },

  getState() {
    return this.state;
  },

  subscribe(observer) {
    this.rerenderEntireTree = observer;
  },

  dispatch(action) {
    this.state.profile = profileReducer(this.state.profile, action);
    this.state.dialogs = dialogsReducer(this.state.dialogs, action);
    this.state.sideBar = sideBarReducer(this.state.sideBar, action);

    this.rerenderEntireTree(this.state);
  },
};

export default store;
