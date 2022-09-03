import s from "../modules-css/Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.col}>
        <div className={`${s.item}`}>
          <a className={s.hover} href="#s">
            Profile
          </a>
        </div>
        <div className={s.item}>
          <a className={s.hover} href="#s">
            Contacts
          </a>
        </div>
        <div className={s.item}>
          <a className={s.hover} href="#s">
            Messages
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
