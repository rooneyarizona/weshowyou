import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { useUsers } from "../contexts/UsersContext";
/**
 * Component for VideoItem which includes Comments component based on API results.
 * @param {*} param0 
 * @returns 
 */

export default function VideoItem({ userName, title, videoUrl, videoId}) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [username, setUsername] = useState();
  const { globalUserName } = useUsers();
  const [showComments, setShowComments] = useState(false);

  //API for comments so that they are presented under the respective video as per database relation.
  //Re-render will take effect if user adds new comment to VideoItem so new comment shows immediately.
  useEffect(() => {
    console.log("Comments fetched");
    async function fetchComments() {
      try {
        const res = await fetch(
          `http://localhost:5000/api/comments/${videoId}`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    }
    fetchComments();
  }, [videoId]);

  const handleAddComment = async () => {
    if (newComment.trim()) {
      try {
        const res = await fetch("http://localhost:5000/api/comments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: globalUserName,
            videoId,
            commentText: newComment,
          }),
        });

        if (res.ok) {
          setNewComment("");
          const updatedComments = await res.json();
          setComments(updatedComments);
        } else {
          console.error("Failed to add comment");
        }
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };

  const handleButtonClick = () => {
    setShowComments(!showComments);
  };

  return (
    <>
    <div className="videoContainer">
      <h2 className="video-title">{title}</h2>
      <h3>Posted by {username} 👋🏽</h3>

      <video
        width="500"
        height="400"
        src={videoUrl}
        title={title}
        userName={username}
        controls
        muted
        autoPlay
        className="responsive-video"
      ></video>
      <button onClick={handleButtonClick}>
        {showComments ? "Hide Comments" : "Show Comments"}
      </button>
      {showComments && (
        <Comment
          comments={comments}
          newComment={newComment}
          setNewComment={setNewComment}
          handleAddComment={handleAddComment}
        />
      )}
    </div>
    <div></div>
    </>
  );
}
