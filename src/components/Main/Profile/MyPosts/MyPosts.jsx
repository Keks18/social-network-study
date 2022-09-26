import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.data.map((el) => (
    <Post name={el.name} age={el.age} likes={el.likes} id={el.id} />
  ));

  let newPostElement = React.createRef();
  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={s.post}>
      post
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        ></textarea>
        <button onClick={addPost}>Add posts</button>
        <button>remove</button>
      </div>
      <div className={s.new__post}>new post</div>
      {postsElement}
    </div>
  );
};

export default MyPosts;
