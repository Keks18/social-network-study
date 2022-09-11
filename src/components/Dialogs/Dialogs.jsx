import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Max" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Ali" },
    { id: 4, name: "Baba" },
  ];

  let messagesData = [
    { id: 1, message: "Hello" },
    { id: 2, message: "Hi" },
    { id: 3, message: "How are you?" },
    { id: 4, message: "I`m fine" },
  ];

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__item}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
        <Message message={messagesData[3].message} />
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
