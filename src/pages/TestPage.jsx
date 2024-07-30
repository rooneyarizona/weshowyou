import { useEffect, useState } from "react";

function TestPage() {
  const [users, setUsers] = useState([]);

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
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    getUsers();
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  useEffect(() => {
    console.log("Users state updated:", users);
  }, [users]); // This useEffect will run only when users state changes

  return (
    <div>
      <h1>Users</h1>
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.userName} - {user.eMailAddress}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
}

export default TestPage;
