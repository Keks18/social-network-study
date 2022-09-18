import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Main data={props.data} addPost={props.addPost} />
    </div>
  );
};

export default App;
