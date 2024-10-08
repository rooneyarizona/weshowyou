import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useVideos } from "../contexts/VideosContext";

import styles from "./SearchBox.module.css"
/**
 * Provides video search functionality with navigation to display results.
 * @returns
 */

export default function SearchBox() {
  //Array to present placeholder options for user inspiration
  const searchArray = [
    { id: 1, searchRequest: "How to walk a dog" },
    { id: 2, searchRequest: "How to change a tire" },
    { id: 3, searchRequest: "How to style hair" },
    { id: 4, searchRequest: "How to write in React" },
  ];

  const [searchPlaceholder, setSearchPlaceholder] =
    useState("How to walk a dog");

  const inputElement = useRef(null);
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState(searchPlaceholder);
  const { searchResults, setSearchResults } = useVideos([]);

  const handleSearch = async () => {
    if (searchItem.trim() === "") return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/videos/search/title/${searchItem}`
      );
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await res.json();
      setSearchResults(data);
      console.log(data);
      console.log(searchResults);
      navigate("/searchResults");
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  /**
   * function to change array element based on user click
   */
  function handleSearchBoxChange() {
    const randomIndex = Math.floor(Math.random() * searchArray.length);
    const randomSearchRequest = searchArray[randomIndex].searchRequest;
    setSearchPlaceholder(randomSearchRequest);
  }

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <div className={styles.searchBoxContainer}>
      <input
        type="text"
        placeholder={searchPlaceholder}
        onClick={handleSearchBoxChange}
        onChange={handleInputChange}
        ref={inputElement}
      ></input>
      <button onClick={handleSearch}>🔎</button>
    </div>
  );
}
