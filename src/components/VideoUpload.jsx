import { useState } from "react";
import { useUsers } from "../contexts/UsersContext";
import FormGenres from "./FormGenres";
/**
 * Component handles video upload and input metadata as well as validating video duration
 */

function VideoUpload({ onUpload }) {
  //Form state management variables
  const { globalUserName } = useUsers();
  const [videoInfo, setVideoInfo] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [userName, setUserName] = useState(globalUserName);
  const [error, setError] = useState("");

  /**
   * handleFileChange is used for file input and validated video duration is < 299 seconds
   *@params {Event} e - Change event when a file is seleected
   *
   */
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
            placeholder={globalUserName}
            value={userName}
            required
            readOnly
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            required
            onChange={(e) => setDescription(e.target.value)}
          />
          
          <FormGenres onGenreChange={(selectedGenre) => setGenre(selectedGenre)}/>
          <button onClick={handleSubmit}>Upload Video</button>
        </div>
      )}
      {error && <div style={{ color: "red" }}>{error}</div>}
    </div>
  );
}

export default VideoUpload;
