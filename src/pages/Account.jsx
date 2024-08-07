import { NavLink } from "react-router-dom";

function Account() {
  return (
    <>
      <div className="mainTextContent">
        <p className="pageLinks">
          <NavLink to={"/register"}>
            <h1>Register</h1>
          </NavLink>
        </p>
        <p className="pageLinks">
          <NavLink to={"/login"}>
            <h1>Login</h1>
          </NavLink>
        </p>
        <p className="pageLinks">
          <NavLink to={"/logout"}>
            <h1>Logout</h1>
          </NavLink>
        </p>
      </div>
    </>
  );
}

export default Account;
