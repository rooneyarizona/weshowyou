import { useState } from "react";
import { useNavigate } from "react-router-dom";

function VideoGenres() {
  const navigate = useNavigate();
  const [videoGenre, setVideoGenre] = useState("Cooking");

  function handleGenreSelection(genre) {
    setVideoGenre(genre);
    navigate("/genreResults", { state: { genre } });
  }

  return (
    <div>
      <h1>Video Genres 🔮</h1>
      <table className="videoGenreTable">
        <tbody>
          <tr>
            <td><button onClick={() => handleGenreSelection("Cooking")}>Cooking</button></td>
            <td><button onClick={() => handleGenreSelection("Sports")}>Sports</button></td>
            <td><button onClick={() => handleGenreSelection("Development")}>Development</button></td>
          </tr>
          <tr>
            <td><button onClick={() => handleGenreSelection("Home")}>Home</button></td>
            <td><button onClick={() => handleGenreSelection("Car")}>Car</button></td>
            <td><button onClick={() => handleGenreSelection("Pets")}>Pets</button></td>
          </tr>
          <tr>
            <td><button onClick={() => handleGenreSelection("Finance")}>Finance</button></td>
            <td><button onClick={() => handleGenreSelection("Misc")}>Misc</button></td>
            <td><button onClick={() => handleGenreSelection("Random")}>Random</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default VideoGenres;
  