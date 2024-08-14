import AWS from "aws-sdk";
import VideoUpload from "../components/VideoUpload";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import VideoItem from "../components/VideoItem";
import { useUsers } from "../contexts/UsersContext";

/**
 * TODO: Split up to adhere to SOLID principles and separate functions.
 */

/**
 * Video upload page with 2 main functions:
 * 1- Upload video file to AWS S3 bucket
 * 2- Send video data to videos database
 *
 * @returns - Upload User Interface for user to upload file and input video data
 */

/**
 * Accessing AWS S3 bucket to post uploaded video
 */
AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACESSS,
  secretAccessKey: process.env.REACT_APP_SECRET,
  region: process.env.REACT_APP_REGION,
});
const s3 = new AWS.S3();

function Upload({ title, videoUrl, userName }) {
  const [uploadResult, setUploadResult] = useState("");
  const [videoDetails, setVideoDetails] = useState("");

  //TODO: Take globalUsername as required input for username
  const { globalUserName } = useUsers();

  /**
   * API to send video data to videos database so that it can be recalled
   */
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
          setVideoDetails({title, videoUrl, userName})
        } else {
          setUploadResult("Error saving video metadata: " + data.message);
        }
      })
      .catch((error) => {
        setUploadResult("Error saving video metadata: " + error.message);
      });
  };

  /**
   * AWS API to upload actual video to S3 bucket
   *
   */
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
        {/**
         * VideoUpload component is integrated here to perform video file input
         */}
        <VideoUpload onUpload={handleVideoUpload} />
        <div id="result">
          <h1>{uploadResult}</h1>
          {uploadResult && (
            <VideoItem
              title={videoDetails.title}
              videoUrl={videoDetails.videoUrl}
              username={videoDetails.userName}
            />
          )}
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
