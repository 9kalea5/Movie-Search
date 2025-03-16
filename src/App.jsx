import { useState } from "react"
import SearchBar from "./components/SearchBar"
import MovieList from "./components/MovieList";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_API_KEY;

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
      <h1>Movie Search</h1>
      <SearchBar
        setMovies={setMovies}
        setError={setError}
        API_KEY={API_KEY}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {selectedMovie ? (
        <MovieDetails selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
      ) : (
        <MovieList 
          movies={movies} 
          fetchMovieDetails={fetchMovieDetails} 
          
        />
      )}
    </div>
    </>
  )
}

export default App
