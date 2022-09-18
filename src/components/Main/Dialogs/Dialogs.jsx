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
    let text = newMessageElement.current.value;
    console.log(text);
  };

  return (
    <div className={s.dialogs}>
      <div>
        <div className={s.dialogs__item}>{dialogsElements}</div>
      </div>
      <div className={s.messages}>
        <div className={s.messages}>{messagesElements}</div>
        <div className={s.newMessage}>
          <textarea ref={newMessageElement}></textarea>
          <button onClick={addMessage}>send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
