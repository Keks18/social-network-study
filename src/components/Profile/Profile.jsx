import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.profile}>
        <img
          className={s.avatar}
          src="https://i.gifer.com/origin/81/8150b6cfc8b1d30c274747580ef161f2_w200.gif"
        />
        <div className="profile__content">
          <div className="profile__description">description</div>
        </div>
      </div>
      <div className="main__post">post</div>
      <div className="main__new-post">new post</div>
      <div className="main__new-post1">post 2</div>
      <div className="main__new-post1">post 2</div>
      <div className="main__new-post1">post 2</div>
      <div className="main__new-post1">post 2</div>
      <div className="main__new-post1">post 2</div>
      <div className="main__new-post1">post 2</div>
      <div className="main__new-post1">post 2</div>
      <div className="main__new-post1">post 2</div>
      <div className="main__new-post1">post 2</div>
    </div>
  );
};

export default Profile;
