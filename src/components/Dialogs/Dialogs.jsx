import DialogItem from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Max" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Ali" },
    { id: 4, name: "Baba" },
  ];

  let dialogsElements = dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));

  let messagesData = [
    { id: 1, message: "Hello" },
    { id: 2, message: "Hi" },
    { id: 3, message: "How are you?" },
    { id: 4, message: "I`m fine" },
  ];

  let messagesElements = messagesData.map((el) => (
    <Message message={el.message} id={el.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div>
        <div className={s.dialogs__item}>
          {dialogsElements[0]}
          {dialogsElements[1]}
          {dialogsElements[2]}
          {dialogsElements[3]}
        </div>
      </div>
      <div className={s.messages}>
        {messagesElements[0]}
        {messagesElements[1]}
        {messagesElements[2]}
        {messagesElements[3]}
      </div>
    </div>
  );
};

export default Dialogs;
