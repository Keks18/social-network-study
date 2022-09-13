import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Main
        postsData={props.postsData}
        dialogsData={props.dialogsData}
        messagesData={props.messagesData}
      />
    </div>
  );
};

export default App;
