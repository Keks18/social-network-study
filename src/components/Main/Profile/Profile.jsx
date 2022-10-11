import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        data={props.data}
        newPostText={props.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
