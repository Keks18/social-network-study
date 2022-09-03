import s from "./Main.module.css";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";

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
