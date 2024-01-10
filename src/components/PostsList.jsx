import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

function PostsList({ isPosting, onStopPosting }) {
  const [enteredBody, setEnteredBody] = useState("");

  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangedHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangedHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  let modalContent;
  if (isPosting) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost
          onBodyChange={bodyChangedHandler}
          onAuthorChange={authorChangedHandler}
        />
      </Modal>
    );
  }
  return (
    <>
      {modalContent}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Jack" body='Don"t leave me' />
      </ul>
    </>
  );
}

export default PostsList;
