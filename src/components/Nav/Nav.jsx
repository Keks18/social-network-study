import { Link } from "react-router-dom";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.col}>
        <div className={`${s.item}`}>
          <Link to="/profile" className={s.hover}>
            Profile
          </Link>
        </div>
        <div className={s.item}>
          <Link to="/dialogs" className={s.hover}>
            Messages
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
