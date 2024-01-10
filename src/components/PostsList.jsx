import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Xiaohan" body="React.js is good" />
        <Post author="Jack" body="Whatever it is" />
      </ul>
    </>
  );
}

export default PostsList;
