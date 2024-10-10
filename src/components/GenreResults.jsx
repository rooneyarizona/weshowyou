import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import VideoItem from "./VideoItem";
import BackButton from "./BackButton"

/**
 * Client view of API data - specifically for videoGenres
 * @returns VideoItems based on videoGenre selection
 */

export default function GenreResults() {
  const location = useLocation();
  //Get state from VideoGenre page location
  const [videoGenre, setVideoGenre] = useState(
    location.state?.genre || "Development"
  );
  const [videoList, setVideoList] = useState([]);
  const path = "videoGenres"

  /**
   * Get videos by videoGenre
   */
  useEffect(() => {
    async function getVideosByGenre() {
      try {
        const res = await fetch(
          `http://localhost:5000/api/videos/genre/${videoGenre}`
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await res.json();
        console.log("Genre data ", data);
        setVideoList(data);
        console.log("Genre data ", data);
        console.log(videoList);
      } catch (error) {
        console.error("Error fetching videos by genre:", error);
      }
    }

    getVideosByGenre();
  }, []);

  return (

    /**
     * Map through videoList array and present selected genre
     */
    <div>
      <h1>{videoGenre} Videos</h1>
      <h3>
        {videoList.length > 0 ? (
          videoList.map((video) => (
            <VideoItem
              key={video.videoId}
              title={video.videoTitle}
              videoUrl={video.videoUrl}
              videoId={video.videoId}
              dateAdded={video.dateAdded}
              username={video.userName}
            />
          ))
        ) : (
          <p>No videos</p>
        )}
      </h3>
      <BackButton location={path}/>
    </div>
  );
}
