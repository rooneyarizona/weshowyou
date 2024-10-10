import { useEffect, useState } from "react";
import VideoItem from "../components/VideoItem";

import styles from "../components/VideoItem.module.css"

/**
 *
 * Homepage component for domain root rendering random video.
 * useEffect is used here to fetch external API data.
 */

function Welcome() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [randomVideo, setRandomVideo] = useState(null);

  useEffect(() => {
    async function getVideos() {
      try {
        const res = await fetch("http://localhost:5000/api/videos");
        if (!res.ok) throw new Error(`HTTP Error ${res.status}`);
        const data = await res.json();
        setVideos(data.videos || []);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getVideos();
  }, []);

  useEffect(() => {
    if (videos.length > 0) {
      handleGetRandomVideo();
    }
  }, [videos]);

  function handleGetRandomVideo() {
    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideoSelection = videos[randomIndex];
    setRandomVideo(randomVideoSelection);
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <br></br>
      <h2>Demonstration of the Day 📽️</h2>
      {randomVideo ? (
        <VideoItem
          key={randomVideo.videoId}
          videoId={randomVideo.videoId}
          videoUrl={randomVideo.videoUrl}
          title={randomVideo.videoTitle}
          username={randomVideo.userName}
          controls
          muted
          autoPlay
          className="responsive-video"
        />
      ) : (
        <p>No videos available.</p>
      )}
    </div>
  );
}

export default Welcome;
