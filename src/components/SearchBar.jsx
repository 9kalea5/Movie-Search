import React from "react";
import "./../styles/searchBar.css";
import { useEffect } from "react";

const SearchBar = ({ query, setQuery, searchMovies, setError }) => {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    document.title = query ? `Search: ${query}` : "Movie App";
  }, [query]); 
  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for Movies"
      />
      <button onClick={() => searchMovies(1)}>Search</button>
    </div>
  );
};

export default SearchBar;