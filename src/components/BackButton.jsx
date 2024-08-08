import { useNavigate } from "react-router-dom";

function BackButton({location}) {
  const navigate = useNavigate();

  function handleBackButton() {
    navigate(`/${location}`);
  }

  return (
    <div>
      <button onClick={handleBackButton}>Back</button>
    </div>
  );
}

export default BackButton;
