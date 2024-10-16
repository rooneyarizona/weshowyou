import React, { useState, useEffect } from "react";
import UserVideoItem from "./UserVideoItem";
import Loading from "./Loading";
import styles from "./VideoList.module.css";

/**
 * Component to list Videos associated with specific username when logged into user portal.
 *
 */

export default function VideoList({ checkUsername }) {
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshList, setRefreshList] = useState(false);

  //useEffect to pull data from external source and only present on mount.
  useEffect(() => {
    
    async function getVideos() {
      try {
        const res = await fetch(
          `http://localhost:5000/api/videos?username=${checkUsername}`
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setVideoList(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    }
    getVideos();
  }, [checkUsername, refreshList]);

  const handleRefresh = () => {
    setRefreshList((prev) => !prev);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    //Map all video entries from video table
    <div className={styles.videoListContainer}>
      {videoList.length > 0 ? (
        videoList.map((video) => (
          <UserVideoItem
            className={styles.videoItem}
            key={video.videoId}
            title={video.videoTitle}
            username={video.userName}
            videoUrl={video.videoUrl}
            videoId={video.videoId}
            dateAdded={video.dateAdded}
            onVideoDeleted={handleRefresh}
          />
        ))
      ) : (
        
        <p>☹️ No videos available</p>
      )}
    </div>
  );
}
