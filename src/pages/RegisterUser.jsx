import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUsers } from "../contexts/UsersContext";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

/**
 * Form to post data to users database through API.
 */

function RegisterUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null); 
  const [eMailAddress, setEmailAddress] = useState("");
  const [dateJoined, setDateJoined] = useState("2024-08-14");
  const [dateError, setDateError] = useState("");

  const navigate = useNavigate();
  const { setGlobalUserName } = useUsers();

  // Helper function to format date for database - converts to YYYY-MM_DD
  const formatDateToMySQL = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check if a valid date is selected
    if (!dateOfBirth) {
      setDateError("Please select a valid date of birth.");
      return;
    } else {
      setDateError("");
    }

    const userData = {
      firstName,
      lastName,
      userName,
      password,
      dateOfBirth: formatDateToMySQL(dateOfBirth), 
      dateJoined,
      eMailAddress,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        userData
      );
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
            {/* DatePicker imported for DOB calendar */}
            <DatePicker
              selected={dateOfBirth}
              onChange={(date) => setDateOfBirth(date)} 
              dateFormat="yyyy-MM-dd"
              placeholderText="Date of Birth"
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
