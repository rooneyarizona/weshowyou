import React, { useState, useEffect } from "react";
import VideoItem from "./VideoItem";
import Loading from "./Loading";

/**
 * Component no longer used as functionality changed to allow Search option and video genre selection to reduce API calls.
 * 
 */


export default function VideoList() {
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(true);

  //useEffect to pull data from external source and only present on mount.
  useEffect(() => {
    console.log("VideoList Mounted");
    async function getVideos() {
      try {
        const res = await fetch("http://localhost:5000/api/videos");
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        setVideoList(data.videos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }
    getVideos();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    //Map all video entries from video table
    <div className="main-container">
      {videoList.length > 0 ? (
        videoList.map((video) => (
          <VideoItem
            key={video.videoId}
            title={video.videoTitle}
            videoUrl={video.videoUrl}
            videoId={video.videoId}
            dateAdded={video.dateAdded}
          />
        ))
      ) : (
        //Present option if no videos (more relevent after search feature added)
        <p>☹️ No videos available</p>
      )}
    </div>
  );
}
