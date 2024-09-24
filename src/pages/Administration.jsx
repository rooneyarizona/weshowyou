import { NavLink, useNavigate } from "react-router-dom";
import { useUsers } from "../contexts/UsersContext";
import { useState, useEffect } from "react";

function Administration() {
  const { globalAdminUsername } = useUsers("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate(); //

  useEffect(() => {
    const verifyAuthentication = () => {
      if (globalAdminUsername !== "admin") {
        setIsAuthenticated(false);
        navigate("/admin"); //
      }
    };
    verifyAuthentication();
  }, [globalAdminUsername, navigate]);

  return (
    <>
      {isAuthenticated && (
        <div className="mainTextContent">
          <h2>Reports</h2>
          <p className="pageLinks">
            <NavLink to={"/getAllUsers"}>
              <h1>Users</h1>
            </NavLink>
          </p>
          <p className="pageLinks">
            <NavLink to={"/getAllVideos"}>
              <h1>Videos</h1>
            </NavLink>
          </p>
          <p className="pageLinks">
            <NavLink to={"/getAllUserFeedback"}>
              <h1>User Feedback</h1>
            </NavLink>
          </p>
          <p className="pageLinks">
            <NavLink to={"/deleteVideo"}>
              <h1>Delete Videos</h1>
            </NavLink>
          </p>
        </div>
      )}
    </>
  );
}

export default Administration;
