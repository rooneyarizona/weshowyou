import { useState } from "react";
import { useNavigate } from "react-router-dom";


function AdministratorLogin() {
    
    const [adminUsername, setAdminUsername] = useState("")
    const [adminPassword, setAdminPassword] = useState("");
    const navigate = useNavigate();
  
    //FIX LOGIN DETAILS
   function handleLoginSubmit (event){
    event.preventDefault();
    if(adminUsername === "admin" && adminPassword === "password123"){
        setAdminUsername(adminUsername);
        navigate("/administration");
    }
    else {
        alert("The username and password are incorrect!")
    }
   }
      
  
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
                value={adminUsername}
                onChange={(e) => setAdminUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                autoComplete="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                required
              />
            </div>
  
            <button type="submit">Login</button>
          </form>
        </div>
      </>
    );
  }
export default AdministratorLogin
