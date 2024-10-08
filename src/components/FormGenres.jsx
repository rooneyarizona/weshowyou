import { useState } from "react";

/**
 * Compenent provides drop down menu for upload component.
 * @returns genre state for input
 */
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
      <option value="Sports">Sports</option>
      <option value="Finance">Finance</option>
      <option value="Misc">Misc</option>
      <option value="Random">Random</option>
    </select>
  );
}

export default FormGenres;
