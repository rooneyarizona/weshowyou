import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import VideoItem from "./VideoItem";

export default function GenreResults() {
  const location = useLocation();
  const [videoGenre, setVideoGenre] = useState(
    location.state?.genre || "Development"
  );
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    async function getVideosByGenre() {
      try {
        const res = await fetch(`http://localhost:5000/api/videos/genre/${videoGenre}`);
        
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        console.log("Genre data ", data);
        setVideoList(data);
        console.log("Genre data ", data);
        console.log(videoList)
      } catch (error) {
        console.error("Error fetching videos by genre:", error);
      }
    }
  
    getVideosByGenre();
  }, [videoGenre]);

  return (
    <div>
      <h1>{videoGenre} Results</h1>
      <h3>
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
          <p>No videos</p>
        )}
      </h3>
    </div>
  );
}
