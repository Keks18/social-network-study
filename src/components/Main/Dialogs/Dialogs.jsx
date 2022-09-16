import DialogItem from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((el) => (
    <DialogItem name={el.name} id={el.id} />
  ));

  let messagesElements = props.messagesData.map((el) => (
    <Message message={el.message} id={el.id} user={el.user} />
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
