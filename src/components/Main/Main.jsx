import s from "./Main.module.css";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <div className={s.main}>
      <div className="container">
        <div className={s.row}>
          <Nav />
          <div className={s.main_content}>
            <Routes>
              <Route path="/dialogs" element={<Dialogs />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
