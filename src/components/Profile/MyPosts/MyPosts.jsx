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
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
