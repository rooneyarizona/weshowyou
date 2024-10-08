import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { useUsers } from "../contexts/UsersContext";

import styles from "./VideoItem.module.css";
import UserDeleteVideo from "../pages/UserDeleteVideo";
/**
 * Component for VideoItem which includes Comments component based on API results.
 * @param {*} param0
 * @returns
 */

export default function UserVideoItem({ username, title, videoUrl, videoId }) {
  const [userName, setUserName] = useState();
  const { globalUserName } = useUsers();
  const [videoDelete, setVideoDelete] = useState(false);

  function handleButtonClick ()  {
    alert(videoId);
    setVideoDelete(true);
    
  };

  return (
    <>
      <div>
        <h2 className="video-title">{title}</h2>
        <span className={styles.videoUsername}>Posted by {username} </span>

        <video
          key="videoId"
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
        <button onClick={handleButtonClick}>Delete</button>

        {videoDelete && <UserDeleteVideo videoId={videoId}/>}
      </div>
      <div></div>
    </>
  );
}
