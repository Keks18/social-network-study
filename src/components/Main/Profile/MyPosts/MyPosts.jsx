import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { name: "Max", age: "22", likes: "11", id: 1 },
    { name: "Nick", age: "25", likes: "22", id: 2 },
    { name: "Alice", age: "21", likes: "33", id: 3 },
    { name: "Alex", age: "56", likes: "44", id: 4 },
  ];

  let postsElement = postsData.map((el) => (
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
