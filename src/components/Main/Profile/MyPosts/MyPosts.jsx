import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.data.map((el) => (
    <Post name={el.name} age={el.age} likes={el.likes} id={el.id} />
  ));

  return (
    <div className={s.post}>
      post
      <div>
        <textarea></textarea>
        <button>Add posts</button>
        <button>remove</button>
      </div>
      <div className={s.new__post}>new post</div>
      {postsElement[0]}
      {postsElement[1]}
      {postsElement[2]}
      {postsElement[3]}
    </div>
  );
};

export default MyPosts;
