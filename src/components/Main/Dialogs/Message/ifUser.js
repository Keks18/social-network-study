import s from "./../Dialogs.module.css";

const ifUser = (props) => {
  return props.user === true ? (
    <div className={`${s.message} ${s.userMessage}`}>{props.message}</div>
  ) : (
    <div className={s.message}>{props.message}</div>
  );
};

export default ifUser;
