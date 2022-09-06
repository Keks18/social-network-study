import s from "./Main.module.css";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";

const Main = () => {
  return (
    <div className={s.main}>
      <div className="container">
        <div className={s.row}>
          <Nav />
          {/* <Profile /> */}
          <div className={s.main_content}>
            <Dialogs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
