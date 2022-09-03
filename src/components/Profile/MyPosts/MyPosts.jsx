import s from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div className={s.post}>
      post
      <div className={s.new__post}>new post</div>
      <div className={s.item}>post 1</div>
    </div>
  );
};

export default MyPosts;
