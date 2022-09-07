import s from "./Main.module.css";
import Nav from "../Nav/Nav";
import Profile from "../Profile/Profile";
import Dialogs from "../Dialogs/Dialogs";
import { Routes, Route } from "react-router-dom";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";

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
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
