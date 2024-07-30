import { NavLink } from "react-router-dom";


//TODO: create new Logout page that can change global state

function Account() {


  return (
    <>
      <div>
        <NavLink to={"/register"}>
          <h2>Register</h2>
        </NavLink>
        <NavLink to={"/login"}>
          <h2>Login</h2>
        </NavLink>
        <NavLink to={"/logout"}><h2>Logout</h2>
        
        </NavLink>
      </div>
    </>
  );
}

export default Account;
