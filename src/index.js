import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        {/* taking CommentDetail component and passing it as a prop down into the ApprovalCard */}
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:00PM"
          content="Nice Post!"
          profilePic={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00PM"
          content="Great, thanks for sharing!"
          profilePic={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          content="Awesome!"
          profilePic={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

// Render an instance of the App component; render it into div with id root
ReactDOM.render(<App />, document.querySelector("#root"));
