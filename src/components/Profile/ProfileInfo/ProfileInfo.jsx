import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={s.profile}>
      <img
        className={s.avatar}
        src="https://i.gifer.com/origin/81/8150b6cfc8b1d30c274747580ef161f2_w200.gif"
      />
      <div className={s.profile__content}>
        <div className={s.profile__description}>description</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
