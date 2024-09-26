import VideoList from "../components/VideoList";
import { useUsers } from "../contexts/UsersContext";

function UserProfile() {
  const { globalUserName } = useUsers();

  return (
    <>
      <div>
        <h2>Information</h2>
        <p>User information here</p>
      </div>
      <div>
        <h2>Videos</h2>

        <VideoList checkUsername={globalUserName} />
      </div>
    </>
  );
}

export default UserProfile;