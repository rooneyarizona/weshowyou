import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useUsers } from "../contexts/UsersContext";

/**
 * Page to provide account navigation
 * @returns Buttons with navigation to relevant pages
 */

function Account() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { globalUserName } = useUsers();

  useEffect(() => {
    if (globalUserName) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [globalUserName]);

  return (
    <>
      <div className="mainTextContent">
        {!loggedIn ? (
          <>
            <h1>Account 🧑‍💻</h1>
            <NavLink to={"/login"}>
              <button className="paddedButton">Login</button>
            </NavLink>
            <NavLink to={"/register"}>
              <button className="paddedButton">Register</button>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to={"/userProfile"}>
              <button className="paddedButton">User Portal</button>
            </NavLink>
            <NavLink to={"/logout"}>
              <button className="paddedButton">Logout</button>
            </NavLink>
          </>
        )}
      </div>
    </>
  );
}

export default Account;
