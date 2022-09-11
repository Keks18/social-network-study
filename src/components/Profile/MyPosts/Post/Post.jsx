import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeR70JmMtwGpC3s2y1m1_crLkt6aLdlAoSnw&usqp=CAU" />
      <div>
        <div className={s.name}>
          {props.name}, {props.age}
        </div>
        <span>likes {props.likes}</span>
      </div>
    </div>
  );
};

export default Post;
