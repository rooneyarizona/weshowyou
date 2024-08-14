import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 *
 * Page to select desired video genre which navigate to results page and render videos from API.
 */

function VideoGenres() {
  const navigate = useNavigate();
  const [videoGenre, setVideoGenre] = useState("Cooking");

  function handleGenreSelection(genre) {
    setVideoGenre(genre);
    navigate("/genreResults", { state: { genre } });
  }

  return (
    <div>
      <h1>Video Genres 📽️</h1>
      <table className="videoGenreTable">
        <tbody>
          <tr>
            <td>
              <button
                className="paddedButton"
                onClick={() => handleGenreSelection("Cooking")}
              >
                Cooking
                <br />
                🧑🏾‍🍳
              </button>
            </td>
            <td>
              <button
                className="paddedButton"
                onClick={() => handleGenreSelection("Sports")}
              >
                Sports
                <br />
                🏅
              </button>
            </td>
            <td>
              <button
                className="paddedButton"
                onClick={() => handleGenreSelection("Development")}
              >
                Development
                <br />
                👩🏻‍💻
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="paddedButton"
                onClick={() => handleGenreSelection("Home")}
              >
                Home
                <br />
                🏠
              </button>
            </td>
            <td>
              <button
                className="paddedButton"
                onClick={() => handleGenreSelection("Car")}
              >
                Car
                <br />
                🚗
              </button>
            </td>
            <td>
              <button
                className="paddedButton"
                onClick={() => handleGenreSelection("Pets")}
              >
                Pets
                <br />
                🐶
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="paddedButton"
                onClick={() => handleGenreSelection("Finance")}
              >
                Finance
                <br />
                💷
              </button>
            </td>
            <td>
              <button
                className="paddedButton"
                onClick={() => handleGenreSelection("Misc")}
              >
                Misc
                <br />
                🎨
              </button>
            </td>
            <td>
              <button
                className="paddedButton"
                onClick={() => handleGenreSelection("Random")}
              >
                Random
                <br />
                🔮
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default VideoGenres;
