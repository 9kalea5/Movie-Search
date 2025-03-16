import React from "react";
import "./../styles/MovieDetails.css";

const MovieDetails = ({ selectedMovie, setSelectedMovie }) => {
  return (
    <div className="movie-details">
      <h2>{selectedMovie.Title} ({selectedMovie.Year})</h2>
      <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
      <p><strong>Genre:</strong> {selectedMovie.Genre}</p>
      <p><strong>Plot:</strong> {selectedMovie.Plot}</p>
      <p><strong>Director:</strong> {selectedMovie.Director}</p>
      <p><strong>Actors:</strong> {selectedMovie.Actors}</p>
      <p><strong>IMDb Rating:</strong> {selectedMovie.imdbRating}</p>
      <button onClick={() => setSelectedMovie(null)}>Back to Search</button>
    </div>
  );
};

export default MovieDetails;
