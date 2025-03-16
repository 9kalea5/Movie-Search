import React from "react"
import "./../styles/searchBar.css"

export default function SearchBar(query, setQuery, searchMovies) {
  return (
    <div className="search-bar">
      <input type="text"
        value={query}
        onChange={(e) => setQuery.target.value}
        placeholder="Search for Movies"
      />
      <button onClick={() => searchMovies(1)}>Search</button>
    </div>
  )
}
