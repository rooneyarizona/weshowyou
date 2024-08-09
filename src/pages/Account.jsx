import { NavLink } from "react-router-dom";

function Account() {
  return (
    <>
      <div className="mainTextContent">
        <h1>Account 🧑‍💻</h1>
        <NavLink to={"/register"}>
          <button className="paddedButton">Register</button>
        </NavLink>

        <NavLink to={"/login"}>
          <button className="paddedButton">Login</button>
        </NavLink>

        <NavLink to={"/logout"}>
          <button className="paddedButton">Logout</button>
        </NavLink>
      </div>
    </>
  );
}

export default Account;
