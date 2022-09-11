import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postsData = [
    { name: "Max", age: "22", likes: "11", id: 1 },
    { name: "Nick", age: "25", likes: "22", id: 2 },
    { name: "Alice", age: "21", likes: "33", id: 3 },
    { name: "Alex", age: "56", likes: "44", id: 4 },
  ];

  return (
    <div className={s.post}>
      post
      <div>
        <textarea></textarea>
        <button>Add posts</button>
        <button>remove</button>
      </div>
      <div className={s.new__post}>new post</div>
      <Post
        name={postsData[0].name}
        age={postsData[0].age}
        likes={postsData[0].likes}
        id={postsData[0].id}
      />
      <Post
        name={postsData[1].name}
        age={postsData[1].age}
        likes={postsData[1].likes}
        id={postsData[1].id}
      />
      <Post
        name={postsData[2].name}
        age={postsData[2].age}
        likes={postsData[2].likes}
        id={postsData[2].id}
      />
      <Post
        name={postsData[3].name}
        age={postsData[3].age}
        likes={postsData[3].likes}
        id={postsData[3].id}
      />
    </div>
  );
};

export default MyPosts;
