import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { useUsers } from "../contexts/UsersContext";

//TODO: Split into components as API and display component
//Pulls comments data and allows user to add a commment which will then set new state to show instantly

export default function VideoItem({ title, videoUrl, videoId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState();
  const { globalUserName } = useUsers();
  const [showComments, setShowComments] = useState(false);

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
    <div className="main-container">
      <h2 className="video-title">{title}</h2>

      <video
        width="500"
        height="400"
        src={videoUrl}
        title={title}
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
  );
}
