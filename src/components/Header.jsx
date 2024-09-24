/**
 * useUsers context provider is used here so that username is presented when logged in
 * TODO: Add Avatar and Logout option
 */
import { useUsers } from "../contexts/UsersContext";
import styles from "../components/header.module.css"

export default function Header() {
  const { globalUserName } = useUsers();
  return (
    <div className={styles.header}>
      <img src="new-logo.jpg" alt="We Show You Logo" />
      <span className={styles.username}>{globalUserName}</span>
    </div>
  );
}
