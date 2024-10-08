
import VideoList from "../components/VideoList";
import { useUsers } from "../contexts/UsersContext";
import { useEffect, useState } from "react";

import styles from "./UserProfile.module.css"

function UserProfile() {
  const { globalUserName } = useUsers();
  const [userDetails, setUserDetails] = useState([]);
  const username = globalUserName;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUserDetails() {
      
        console.log("Start of useeffect: ", username, globalUserName)
        try {
          const res = await fetch(
            `http://localhost:5000/api/users?username=${username}`
          );
          if (!res.ok) {
            throw new Error(`Error status ${res.status}`);
          }
          const data = await res.json();
          console.log("Before details set", username)
          console.log("API Data Test: ", data);
          setUserDetails(data || []);
          setIsLoading(false);
          console.log("User Details: ", userDetails);
        } catch (error) {
          console.error("Error fetching user data");
          setIsLoading(false);
        }
    }
    getUserDetails();
  }, []);

  return (
    <>
      <div className={styles.mainContainer}>
        <h2>Information</h2>
        <p>
          <table>
            <thead>
              <td>First Name</td>
              <td>Last Name</td>
              <td>E-mail</td>
              <td>Username</td>
              <td>Date Joined</td>
            </thead>
            <tbody>
              {!isLoading && userDetails.map((user, index) => (
                <tr key={index}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.eMailAddress}</td>
                  <td>{globalUserName}</td>
                  <td>{user.dateJoined}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button>Update Information</button>
        </p>
      </div>
      <div>
        <h2>Videos</h2>

        <VideoList checkUsername={username} />
      </div>
    </>
  );
}

export default UserProfile;
