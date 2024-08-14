import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../contexts/UsersContext";

/**
 *
 * Form to post data to users database through API.
 */

function RegisterUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [eMailAddress, setEmailAddress] = useState("");
  const [dateJoined, setDateJoined] = useState("2024-07-22");
  const [dateError, setDateError] = useState("");

  const navigate = useNavigate();
  const { setGlobalUserName } = useUsers();

  /**
   * Regex to ensure date matches MySQL format
   */
  const validateDate = (date) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateDate(dateOfBirth)) {
      setDateError("Date of birth must be in the format YYYY-MM-DD");
      return;
    } else {
      setDateError("");
    }

    const userData = {
      firstName,
      lastName,
      userName,
      password,
      dateOfBirth,
      dateJoined,
      eMailAddress,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        userData
      );
      /**
       * useUsers context API to assign and access global username
       */
      setGlobalUserName(userName);
      console.log(response.data);
      alert("User registered successfully!");
      navigate("/registrationSuccess");
    } catch (error) {
      console.error("Error registering user: ", error);
      alert("Error registering user.");
    }
  };

  return (
    <>
      <div className="account-page">
        <h1 align="center">Register</h1>
        <form onSubmit={handleFormSubmit}>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Date of Birth (YYYY-MM-DD)"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
            {dateError && <div style={{ color: "red" }}>{dateError}</div>}
          </div>
          <div>
            <input
              type="email"
              placeholder="E-mail"
              value={eMailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

export default RegisterUser;
