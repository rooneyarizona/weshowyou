import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { useUsers } from "../contexts/UsersContext";

import styles from "./VideoItem.module.css"
/**
 * Component for VideoItem which includes Comments component based on API results.
 * @param {*} param0 
 * @returns 
 */

export default function UserVideoItem({ username, title, videoUrl, videoId}) {
 
  const [userName, setUserName] = useState();
  const { globalUserName } = useUsers();


  
//   useEffect(() => {
//     console.log("Comments fetched");
//     async function fetchComments() {
//       try {
//         const res = await fetch(
//           `http://localhost:5000/api/comments/${videoId}`
//         );
//         if (!res.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await res.json();
//         setComments(data);
//       } catch (error) {
//         console.error("Error fetching comments:", error);
//       }
//     }
//     fetchComments();
//   }, [videoId]);

//   const handleAddComment = async () => {
//     if (newComment.trim()) {
//       try {
//         const res = await fetch("http://localhost:5000/api/comments", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             userName: globalUserName,
//             videoId,
//             commentText: newComment,
//           }),
//         });

//         if (res.ok) {
//           setNewComment("");
//           const updatedComments = await res.json();
//           setComments(updatedComments);
//         } else {
//           console.error("Failed to add comment");
//         }
//       } catch (error) {
//         console.error("Error adding comment:", error);
//       }
//     }
//   };

  const handleButtonClick = () => {
    alert("Delete Test")
  };

  return (
    <>
    <div>
      <h2 className="video-title">{title}</h2>
      <span className={styles.videoUsername}>Posted by {username} </span>

      <video
        width="500"
        height="400"
        src={videoUrl}
        title={title}
        username={userName}
        controls
        muted
        autoPlay
        className="responsive-video"
      ></video>
      <button onClick={handleButtonClick}>
        Delete
      </button>
      
    </div>
    <div></div>
    </>
  );
}
