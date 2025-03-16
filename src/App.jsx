import { useState } from "react"
import SearchBar from "./components/SearchBar"
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;

  const searchMovies = async (pageNumber = 1) => {
    if (!query) return;
    setError("");
    setPage(pageNumber);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&page=${pageNumber}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
        setTotalPages(Math.ceil(data.totalResults / 10));
      } else {
        setError(data.Error);
      }
    } catch (err) {
      setError("Failed to fetch movies.");
    }
  };

  const fetchMovieDetails = async (imdbID) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setSelectedMovie(data);
      } else {
        setError(data.Error);
      }
    } catch (err) {
      setError("Failed to fetch movie details.");
    }
  };

  return (
    <>
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ color: 'black' }}>Movie Search</h1>
      <SearchBar
        query={query}
        setQuery={setQuery}
        searchMovies={searchMovies}
        setError={setError}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {selectedMovie ? (
        <MovieDetails selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
      ) : (
        <MovieList 
          movies={movies} 
          fetchMovieDetails={fetchMovieDetails}
          page={page}
          totalPages={totalPages}
          searchMovies={searchMovies}
        />
      )}
    </div>
    </>
  );
}

export default App;