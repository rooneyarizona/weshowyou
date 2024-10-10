import { useEffect, useState } from "react";
import DeleteVideoFromS3 from "../components/DeleteVideoFromS3";


function UserDeleteVideo({videoId, onVideoDeleted}) {

    
    const [message, setMessage] = useState("");
    const [videoData, setVideoData] = useState(null);
    const [s3Filename, setS3Filename] = useState("");
    const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
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
          console.log("UserDelete Test: ", data);
          setMessage(`Video ${videoId} Accessed`);
          extractS3Filename(data); // Extract S3 filename
          handleVideoDelete();
          isDeleted(true);
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
  }, []); // Fetch video data when videoId changes

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
        setMessage(
          `Video ${videoId} was deleted successfully from database 🚮`
        );
        setVideoData(null);
        setIsDeleted(true);
        if(onVideoDeleted){
            onVideoDeleted();
        }
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
    console.log("Filename: ", fileName)
  }

  return (
    <div>
      <h3>Video {videoId} will be deleted</h3>
      {isDeleted && <DeleteVideoFromS3 videoId={videoId} s3Filename={s3Filename} />}
      
    </div>
  );
}

export default UserDeleteVideo;
