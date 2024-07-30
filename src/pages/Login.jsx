import { useNavigate } from "react-router-dom";
import { useUsers } from "../contexts/UsersContext";

const { useState } = require("react");

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setGlobalUserName } = useUsers();
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName, password }),
      });
      const data = await res.json();
      if (data.success) {
        setGlobalUserName(data.userName);
        navigate("/videos");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <>
      <div>
        <h1 align="center">Login</h1>
        <form onSubmit={handleLoginSubmit}>
          <div>
            <input
              type="text"
              placeholder="Username"
              autoComplete="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              autoComplete="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
export default Login;
