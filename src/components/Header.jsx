/**
 * useUsers context provider is used here so that username is presented when logged in
 * TODO: Add Avatar and Logout option
 */
import { useUsers } from "../contexts/UsersContext";

export default function Header() {
  const { globalUserName } = useUsers();
  return (
    <div className="header">
      <img src="new-logo.jpg" alt="We Show You Logo" />
      <h3>{globalUserName}</h3>
    </div>
  );
}
