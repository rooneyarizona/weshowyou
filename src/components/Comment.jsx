import React from "react";
import { useUsers } from "../contexts/UsersContext";

import styles from "./Comment.module.css";

/**
 * Comment component that can be used to input and display user comments
 * 
 * @returns Comment array mapped and add comment function
 */
export default function Comment({
  userName,
  comments,
  newComment,
  setNewComment,
  handleAddComment,
}) {
  const { globalUserName } = useUsers();
  return (
    <div>
      
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.commentId} className="comment">
            <p>
              <strong className={styles.commentHeader}>{comment.userName} </strong>- {comment.commentText}
            </p>
            <small>
              Posted on: {new Date(comment.dateAdded).toLocaleString()}
            </small>
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
