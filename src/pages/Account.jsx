import { NavLink } from "react-router-dom";

function Account() {
  return (
    <>
      <div>
        <p className="pageLinks">
          <NavLink to={"/register"}>
            <h2>Register</h2>
          </NavLink>
        </p>
        <p className="pageLinks">
          <NavLink to={"/login"}>
            <h2>Login</h2>
          </NavLink>
        </p>
        <p className="pageLinks">
          <NavLink to={"/logout"}>
            <h2>Logout</h2>
          </NavLink>
        </p>
      </div>
    </>
  );
}

export default Account;
