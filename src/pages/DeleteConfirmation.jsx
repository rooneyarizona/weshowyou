import { NavLink } from "react-router-dom";

import { useLocation } from "react-router-dom";

function DeleteConfirmation() {
  const location = useLocation();

  const { videoId } = location.state || {};

  return (
    <div>
      <p>{videoId} was successfully deleted</p>
      <p>
        <NavLink to="/videos">Back to Videos</NavLink>
      </p>
    </div>
  );
}

export default DeleteConfirmation;
