import { useVideos } from "../contexts/VideosContext";
import VideoItem from "./VideoItem";

/**
 * Results from search box presented as a video item
 * @returns  VideoItem
 * */

export default function SearchResults() {
  const { searchResults } = useVideos([]);

  return (
    <div>
      {console.log("Search Results Global:", searchResults)}
      <h1>Search Results 📽️</h1>
      {searchResults.length > 0 ? (
        <div>
          {searchResults.map((resultItem) => (
            <VideoItem
              key={resultItem.videoId}
              videoId={resultItem.videoId}
              videoUrl={resultItem.videoUrl}
              title={resultItem.videoTitle}
              username={resultItem.userName}
              controls
              muted
              autoplay
              className="responsive-video"
            />
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}
