import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__item}>
        <DialogItem name="Max" id="1*" />
        <DialogItem name="Max" id="1" />
        <DialogItem name="Max" id="1" />
        <DialogItem name="Max" id="1" />
        <DialogItem name="Max" id="1" />
      </div>
      <div className={s.messages}>
        <Message message="hello " />
        <Message message="Hi" />
        <Message message="How are you?" />
        <Message message="I`m fine" />
      </div>
    </div>
  );
};

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialogs__item}>
      <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

export default Dialogs;
