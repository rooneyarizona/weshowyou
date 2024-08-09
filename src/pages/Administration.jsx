import { NavLink } from "react-router-dom";
import { useUsers } from "../contexts/UsersContext";

//TODO: Add additional reports

function Administration() {
  const { globalAdminUsername } = useUsers("");
  return (
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
    </div>
  );
}

export default Administration;
