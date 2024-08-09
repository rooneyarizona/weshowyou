import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useUsers } from "../contexts/UsersContext";
import { useNavigate } from "react-router-dom";
import { Button } from "bootstrap";
import BackButton from "../components/BackButton";

//Component for reporting data from users API
//TODO: Make resuable component that can be used for multiple administration reports.
//TODO: Add return link to reports

function GetAllVideos() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { globalAdminUsername } = useUsers("");
  const navigate = useNavigate();

  // if(globalAdminUsername !== "admin"){
  //   navigate("/adminLogin")
  // }

  useEffect(() => {
    async function getVideos() {
      try {
        const res = await fetch("http://localhost:5000/api/videos");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log("Full response: ", data);
        console.log("Admin Username: ", globalAdminUsername);
        setVideos(data.videos || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }
    getVideos();
  }, []);

  useEffect(() => {
    console.log("Users state updated:", videos);
  }, [videos]);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <h1>Videos</h1>
      {videos.length > 0 ? (
        <table className="user-table">
          <thead>
            <tr>
              <td>Video ID</td>
              <td>User</td>
              <td>Video Title</td>
              <td>Description</td>
              <td>Genre</td>
              <td>Date Added</td>
            </tr>
          </thead>
          <tbody>
            {videos.map((video, index) => (
              <tr key={index}>
                <td>{video.videoId}</td>
                <td>{video.userName}</td>
                <td>{video.videoTitle}</td>
                <td>{video.videoDescription}</td>
                <td>{video.videoGenre}</td>
                {new Date(video.dateAdded).toLocaleDateString("en-US")}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>☹️ No videos found</p>
      )}
      <span>
        <BackButton location={"administration"}/>
      </span>
    </div>
  );
}

export default GetAllVideos;
