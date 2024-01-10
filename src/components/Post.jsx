const names = ["Xiaohan", "Jack"];

function Post() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <p>{chosenName}</p>
      <p>React.js is good!</p>
    </div>
  );
}

export default Post;
