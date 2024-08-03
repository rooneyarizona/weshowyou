import React from "react";
import { useUsers } from "../contexts/UsersContext";

//Comment component that maps comment API to present data in the UI.
export default function Comment({ userName, comments, newComment, setNewComment, handleAddComment }) {

  const {globalUserName} = useUsers();
  return (
    <div className="comments-section">
      <h3>Comments</h3>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.commentId} className="comment">
            <p><strong>{comment.userName} </strong>- {comment.commentText}</p>
            <small>Posted on: {new Date(comment.dateAdded).toLocaleString()}</small>
          </div>
        ))
      ) : (
        <p>No comments yet</p>
      )}
  {/**/}
      <div className="add-comment">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
}
