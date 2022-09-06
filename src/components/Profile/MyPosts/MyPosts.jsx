import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.post}>
      post
      <div>
        <textarea></textarea>
        <button>Add posts</button>
        <button>remove</button>
      </div>
      <div className={s.new__post}>new post</div>
      <Post name="Max" age="22" count="11" />
      <Post name="Nick" age="25" count="22" />
      <Post name="Alice" age="21" count="33" />
      <Post name="Lox" age="56" count="44" />
    </div>
  );
};

export default MyPosts;
