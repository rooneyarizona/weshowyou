import { NavLink } from "react-router-dom";
import { useUsers } from "../contexts/UsersContext";

//TODO: Add additional reports

function Administration() {
  const { adminUsername } = useUsers("");
  return (
    <div className="mainTextContent">
      <h1>Administrator Reporting</h1>

      <p className="pageLinks">
        <NavLink to={"/getAllUsers"}>
          <h1>Get All Users</h1>
        </NavLink>
      </p>
      <p className="pageLinks">
        <NavLink to={"/getAllVideos"}>
          <h1>Get All Videos</h1>
        </NavLink>
      </p>
    </div>
  );
}

export default Administration;
