import { useState } from "react";

function FormGenres({ onGenreChange }) {
  const [genre, setGenre] = useState("Development");

  function handleGenreSelection(e) {
    const selectedGenre = e.target.value;
    setGenre(selectedGenre);
    onGenreChange(selectedGenre);
  }

  return (
    <select className="dropDownMenu" value={genre} onChange={handleGenreSelection}>
      <option value="Development">Development</option>
      <option value="Cooking">Cooking</option>
      <option value="Home">Home</option>
      <option value="Cars">Cars</option>
      <option value="Pets">Pets</option>
      <option value="Pets">Sports</option>
      <option value="Pets">Finance</option>
      <option value="Pets">Misc</option>
      <option value="Pets">Random</option>
    </select>
  );
}

export default FormGenres;
