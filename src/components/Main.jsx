import Nav from "./Nav";
import Profile from "./Profile";
import s from "../modules-css/Main.module.css";

const Main = () => {
  return (
    <div className={s.main}>
      <div className="container">
        <div className={s.row}>
          <Nav />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Main;
