import AWS from "aws-sdk";
import VideoUpload from "../components/VideoUpload";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import VideoItem from "../components/VideoItem";
import { useVideos } from "../contexts/VideosContext";
import { useUsers } from "../contexts/UsersContext";

AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACESSS,
  secretAccessKey: process.env.REACT_APP_SECRET,
  region: process.env.REACT_APP_REGION,
});

const s3 = new AWS.S3();

function Upload({ title, videoUrl }) {
  const [uploadResult, setUploadResult] = useState("");
  const { globalUserName } = useUsers();

  const saveVideoMetadata = (title, description, genre, videoUrl, userName) => {
    fetch("http://localhost:5000/api/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        videoTitle: title,
        videoDescription: description,
        videoGenre: genre,
        videoUrl: videoUrl,
        userName: userName,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setUploadResult("Video uploaded successfully 📽️");
        } else {
          setUploadResult("Error saving video metadata: " + data.message);
        }
      })
      .catch((error) => {
        setUploadResult("Error saving video metadata: " + error.message);
      });
  };

  const handleVideoUpload = (file, title, description, genre, userName) => {
    const fileName = `${Date.now()}.mp4`;

    const params = {
      Bucket: "we-show-you",
      Key: fileName,
      Body: file,
      ContentType: "video/mp4",
    };

    s3.upload(params, (err, data) => {
      if (err) {
        setUploadResult("Error uploading video: " + err.message);
      } else {
        const videoUrl = data.Location;
        setUploadResult("Video uploaded successfully 📽️");

        // Send video metadata to the API
        saveVideoMetadata(title, description, genre, videoUrl, userName);
      }
    });
  };

  return (
    <div>
      <h1 align="center">Upload</h1>
      <ul className="mainTextContent">
        ⌛ Maximum length = 5 minutes 🙈 No inappropriate content 🙉 No
        cussing/swearing 🎓 Must be a demonstration
      </ul>
      <div className="main-container">
        <VideoUpload onUpload={handleVideoUpload} />
        <div id="result">
          <h1>{uploadResult}</h1>
          {uploadResult && <VideoItem title={title} videoUrl={videoUrl} />}
          <NavLink to="/videoGenres">
            <p className="pageLinks">
              <h1>Back to Videos</h1>
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Upload;
