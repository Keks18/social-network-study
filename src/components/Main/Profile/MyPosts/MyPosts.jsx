import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.data.map((el) => (
    <Post name={el.name} age={el.age} likes={el.likes} id={el.id} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
  };

  return (
    <div className={s.post}>
      post
      <div>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Add posts</button>
        <button>remove</button>
      </div>
      <div className={s.new__post}>new post</div>
      {postsElement}
    </div>
  );
};

export default MyPosts;
