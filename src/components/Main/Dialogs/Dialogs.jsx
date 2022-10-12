import DialogItem from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../redux/dialogs-reducer";

const Dialogs = (props) => {
  console.log(props);
  let dialogsElements = props.dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));

  let messagesElements = props.messagesData.map((el) => (
    <Message message={el.message} id={el.id} user={el.user} />
  ));

  let addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };
  let onMessageChange = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewMessageTextActionCreator(text));
  };
  return (
    <div className={s.dialogs}>
      <div>
        <div className={s.dialogs__item}>{dialogsElements}</div>
      </div>
      <div className={s.messages}>
        <div className={s.messages}>{messagesElements}</div>
        <div className={s.newMessage}>
          <textarea
            onChange={onMessageChange}
            value={props.newMessageText}
            placeholder={"enter message"}
          ></textarea>
          <button onClick={addMessage}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
