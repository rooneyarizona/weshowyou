import { useNavigate } from "react-router-dom";

/**
 * @Component
 * A reusable button that can be added to navigate to page on browser router
 * @props {location} 
 * @returns - Back Button that takes location as prop.
 */

function BackButton({location}) {
  const navigate = useNavigate();

  //Add location prop to navigate to that page
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
