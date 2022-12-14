import s from "./Main.module.css";
import { Routes, Route } from "react-router-dom";
import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profile/Profile";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import Nav from "./Nav/Nav";

const Main = (props) => {
  return (
    <div className={s.main}>
      <div className="container">
        <div className={s.row}>
          <Nav data={props.data.sideBar} />
          <div className={s.main_content}>
            <Routes>
              <Route
                path="/dialogs/*"
                element={
                  <Dialogs
                    dialogsData={props.data.dialogs.dialogsData}
                    messagesData={props.data.dialogs.messagesData}
                    dispatch={props.dispatch}
                    newMessageText={props.data.dialogs.newMessageText}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <Profile
                    data={props.data.profile.postsData}
                    newPostText={props.data.profile.newPostText}
                    dispatch={props.dispatch}
                  />
                }
              />
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
