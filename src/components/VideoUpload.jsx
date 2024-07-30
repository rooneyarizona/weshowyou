import { useState } from "react";

function VideoUpload({ onUpload }) {
  const [videoInfo, setVideoInfo] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [userName, setUserName] = useState("")
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const video = document.createElement("video");
      video.preload = "metadata";

      video.onloadedmetadata = () => {
        window.URL.revokeObjectURL(video.src);
        const duration = video.duration;
        if (duration > 299) {
          setError("Video is longer than 299 seconds.");
        } else {
          setError("");
          setVideoInfo({ file, duration });
        }
      };

      video.src = URL.createObjectURL(file);
    }
  };

  const handleSubmit = () => {
    if (videoInfo && title && description && genre) {
      onUpload(videoInfo.file, title, description, genre, userName);
    } else {
      setError("😬Please fill out all fields and select a valid video📼");
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="fileUp" className="custom-file-upload">
          Choose File
        </label>
        <input
          type="file"
          className="upload"
          id="fileUp"
          onChange={handleFileChange}
        />
      </div>
      {videoInfo && (
        <div>
           <input
            type="text"
            placeholder={"User Name"}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <button onClick={handleSubmit}>Upload Video</button>
        </div>
      )}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}

export default VideoUpload;
