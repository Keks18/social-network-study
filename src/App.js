import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
    </div>
  );
};

export default App;
