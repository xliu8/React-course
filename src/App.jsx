import { useState } from "react";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisable, setModalIsVisable] = useState(false);

  function hideModalHandler() {
    setModalIsVisable(false);
  }

  function showModalHandler() {
    setModalIsVisable(true);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          isPosting={modalIsVisable}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
