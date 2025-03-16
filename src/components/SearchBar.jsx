import React from "react";
import "./../styles/searchBar.css";

const SearchBar = ({ query, setQuery, searchMovies, setError }) => {
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

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