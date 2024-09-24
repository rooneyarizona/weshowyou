import { useState, useEffect } from "react";
import VideoItem from "../components/VideoItem";
import DeleteVideoFromS3 from "../components/DeleteVideoFromS3";
import { useNavigate } from "react-router-dom";

function DeleteVideo() {
  const [videoId, setVideoId] = useState("");
  const [message, setMessage] = useState("");
  const [videoData, setVideoData] = useState(null);
  const [s3Filename, setS3Filename] = useState("");
  const [isDeleted, setIsDeleted] = useState(false);

  const navigate = useNavigate();

  // Fetch video data when videoId changes
  useEffect(() => {
    if (!videoId) return;

    const fetchVideoData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/videos/${videoId}`,
          {
            method: "GET",
          }
        );

        const data = await response.json();

        if (response.ok) {
          setVideoData(data); 
          setMessage(`Video ${videoId} Accessed`);
          extractS3Filename(data); // Extract S3 filename
        } else {
          setVideoData(null); 
          setMessage(`Error: ${data.message}`);
        }
      } catch (error) {
        setVideoData(null); 
        setMessage(`An error occurred: ${error.message}`);
      }
    };

    fetchVideoData();
  }, [videoId]); // Fetch video data when videoId changes

  const handleVideoDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/videos/${videoId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage(`Video ${videoId} was deleted successfully from database 🚮`);
        setVideoData(null);
        setIsDeleted(true); 

    
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setMessage(`An error occurred: ${error.message}`);
    }
  };

  
  function extractS3Filename(videoData) {
    const videoSplit = videoData.videoUrl.split("/");
    const fileName = videoSplit[videoSplit.length - 1];
    setS3Filename(fileName); // 
  }

  const handleCleanup = () => {
    setIsDeleted(false);
    setS3Filename("");
  };

  return (
    <div>
      <h2>Delete Video</h2>
      <p>
        Please search for the videoId and hit the <strong>delete</strong> button
        to confirm. Videos cannot be revived once deleted.
      </p>
      <input
        type="text"
        placeholder="Enter video ID"
        value={videoId}
        onChange={(e) => setVideoId(e.target.value)}
      />
      <button onClick={() => setVideoId(videoId)}>Search Video</button>
      {message && <p>{message}</p>}
      

      {videoData ? (
        <div>
          <VideoItem
            key={videoData.videoId}
            videoUrl={videoData.videoUrl}
            title={videoData.videoTitle}
            username={videoData.userName}
            controls
            muted
            autoPlay
            className="responsive-video"
          />
          <button onClick={handleVideoDelete}>Delete Video</button>
        </div>
      ) : (
        videoId && <h3>No Video Found</h3>
      )}

      
      {isDeleted && <DeleteVideoFromS3 s3Filename={s3Filename} onDeleteCleanup={handleCleanup} videoId={videoId}/>}
    </div>
  );
}

export default DeleteVideo;
