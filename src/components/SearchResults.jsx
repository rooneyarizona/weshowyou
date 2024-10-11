import { useVideos } from "../contexts/VideosContext";
import VideoItem from "./VideoItem";

import styles from "./VideoList.module.css"

/**
 * Results from search box presented as a video item
 * @returns  VideoItem
 * */

export default function SearchResults() {
  const { searchResults } = useVideos([]);

  return (
    <>    
      <h1>Search Results 📽️</h1>
      <div className={styles.videoListContainer}>
      {searchResults.length > 0 ? (   
          searchResults.map((resultItem) => (
            <VideoItem
              className={styles.videoItem}
              key={resultItem.videoId}
              videoId={resultItem.videoId}
              videoUrl={resultItem.videoUrl}
              title={resultItem.videoTitle}
              username={resultItem.userName}
              controls
              muted
              autoplay              
            />
          ))
          
      ) : (
        <p>No results found.</p>
      )}
    </div>
   
    </>
  );
  
}
