import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink className={s.link} to={path}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
