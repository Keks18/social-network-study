import Nav from "./Nav";
import Profile from "./Profile";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="main__row">
          <Nav />
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Main;
