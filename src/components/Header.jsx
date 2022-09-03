import s from "../modules-css/Header.module.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className={s.content}>
          <img
            className={s.logo}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/640px-Logo_NIKE.svg.png"
          ></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
