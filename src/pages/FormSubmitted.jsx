import { useUsers } from "../contexts/UsersContext";

/**
 * 
 * COnfirmation page for when user feedback form has been submitted successfully.
 */
function FormSubmitted() {
  const { globalUserName } = useUsers();

  return (
    <div>
      <h3>
        Thank you, <strong>{globalUserName} </strong> for your feedback 🚀
      </h3>
      <h3>
        Someone from our team will reach out should follow up be required.
      </h3>
    </div>
  );
}

export default FormSubmitted;
