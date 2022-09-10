import s from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__item}>
        <div className={s.dialog}>Max</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Sdjskkd asdlld sldldlld</div>
      </div>
    </div>
  );
};

export default Dialogs;
