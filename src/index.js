import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:00PM"
        content="Nice Post!"
        profilePic={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00PM"
        content="Great, thanks for sharing!"
        profilePic={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:00PM"
        content="Awesome!"
        profilePic={faker.image.avatar()}
      />
    </div>
  );
};

// Render an instance of the App component; render it into div with id root
ReactDOM.render(<App />, document.querySelector("#root"));
