import { useEffect, useState } from "react";
import Loading from "../components/Loading";

//Component for reporting data from users API
//TODO: Make resuable component that can be used for multiple administration reports.

function GetAllUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch("http://localhost:5000/api/users");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log("Full response: ", data);
        setUsers(data.users || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    getUsers();
  }, []);

  useEffect(() => {
    console.log("Users state updated:", users);
  }, [users]);
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <h1>Users</h1>
      {users.length > 0 ? (
        <table className="user-table">
          <thead>
            <tr>
              <td>ID</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Username</td>
              <td>E-mail</td>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.user_id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.userName}</td>
                <td>{user.eMailAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>☹️ No users found</p>
      )}
    </div>
  );
}

export default GetAllUsers;
