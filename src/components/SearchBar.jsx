import React, { useState } from "react";
import "./../styles/searchBar.css";

export default function SearchBar({ setMovies, setError, API_KEY }) {
  const [query, setQuery] = useState(""); // Local state for search input

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const searchMovies = async (query, pageNumber = 1) => {
    if (!query) return;
    setError("");

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${pageNumber}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search); // Passing the movie results to parent component
      } else {
        setError(data.Error); // Handling errors
      }
    } catch (err) {
      setError("Failed to fetch movies."); // Catching any errors during the fetch
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for Movies"
      />
      <button onClick={() => searchMovies(query, 1)}>Search</button>
    </div>
  );
}
