import DialogItem from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));

  let messagesElements = props.messagesData.map((el) => (
    <Message message={el.message} id={el.id} user={el.user} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch({ type: "ADD-MESSAGE" });
  };
  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch({ type: "UPDATE-NEW-MESSAGE-TEXT", newMessage: text });
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
            ref={newMessageElement}
            value={props.newMessageText}
          ></textarea>
          <button onClick={addMessage}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
