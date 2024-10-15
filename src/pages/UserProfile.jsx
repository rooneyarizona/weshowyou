import VideoList from "../components/VideoList";
import { useUsers } from "../contexts/UsersContext";
import { useEffect, useState } from "react";
import styles from "./UserProfile.module.css";

function UserProfile() {
  const { globalUserName } = useUsers();
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    eMailAddress: "",
    dateJoined: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    async function getUserDetails() {
      try {
        const res = await fetch(
          `http://localhost:5000/api/users?username=${globalUserName}`
        );
        if (!res.ok) {
          throw new Error(`Error status ${res.status}`);
        }
        const data = await res.json();
        setUserDetails(data[0] || {});
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user data");
        setIsLoading(false);
      }
    }
    getUserDetails();
  }, [globalUserName]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/users/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      if (!res.ok) {
        throw new Error("Failed to update user details");
      }

      alert("User details updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user details: ", error);
      alert("An error occurred while updating the details.");
    }
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <h2>User Details</h2>
        <p>
          <table className="user-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>E-mail</th>
                <th>Username</th>
                <th>Date Joined</th>
              </tr>
            </thead>
            <tbody>
              {!isLoading && (
                <tr>
                  <td>
                    <input
                      type="text"
                      name="firstName"
                      value={userDetails.firstName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="lastName"
                      value={userDetails.lastName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      name="eMailAddress"
                      value={userDetails.eMailAddress}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </td>
                  <td>{globalUserName}</td>
                  <td>
                    {new Date(userDetails.dateJoined).toLocaleDateString(
                      "en-US"
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <button onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? "Cancel" : "Update Information"}
          </button>
          {isEditing && <button onClick={handleUpdate}>Save Changes</button>}
        </p>
      </div>
      <div>
        <h2>Your Videos 📽️</h2>
        <VideoList checkUsername={globalUserName} />
      </div>
    </>
  );
}

export default UserProfile;
