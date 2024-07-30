import { useUsers } from "../contexts/UsersContext";

function RegistrationSuccess() {
const {globalUserName} = useUsers();

  return (
    <div>
      <h3>Welcome <strong>{globalUserName} </strong>👋 You have successfully registered for We Show You.</h3>
      <h3>
        Please use the navigation links above to start uploading and streaming!
      </h3>
    </div>
  );
}

export default RegistrationSuccess;
