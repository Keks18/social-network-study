import s from "./Friends.module.css";

const Friends = (props) => {
  return (
    <div className={s.friends}>
      <div className={s.title}>Friends</div>
      <div className={s.col}>
        <div className={s.friend}>{props.data[0].name}</div>
        <div className={s.friend}>{props.data[1].name}</div>
        <div className={s.friend}>{props.data[2].name}</div>
      </div>
    </div>
  );
};

export default Friends;
