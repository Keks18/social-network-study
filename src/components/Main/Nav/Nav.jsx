import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import s from "./Nav.module.css";

const Nav = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.col}>
        <div className={`${s.item}`}>
          <NavLink
            to="/profile"
            className={(navData) =>
              s.hover + " " + (navData.isActive ? s.active : s.item)
            }
          >
            Profile
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/dialogs"
            className={(navData) =>
              s.hover + " " + (navData.isActive ? s.active : s.item)
            }
          >
            Messages
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/news"
            className={(navData) =>
              s.hover + " " + (navData.isActive ? s.active : s.item)
            }
          >
            News
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/music"
            className={(navData) =>
              s.hover + " " + (navData.isActive ? s.active : s.item)
            }
          >
            Music
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            to="/settings"
            className={(navData) =>
              s.hover + " " + (navData.isActive ? s.active : s.item)
            }
          >
            Settings
          </NavLink>
        </div>
        <Friends data={props.data.friendsData} />
      </div>
    </nav>
  );
};

export default Nav;
