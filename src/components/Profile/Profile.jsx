import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div className={s.profile}>
        <img
          className={s.avatar}
          src="https://i.gifer.com/origin/81/8150b6cfc8b1d30c274747580ef161f2_w200.gif"
        />
        <div className="profile__content">
          <div className="profile__description">description</div>
        </div>
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;
