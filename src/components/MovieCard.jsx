import React from "react";
import "./../styles/MovieCard.css";

const MovieCard = ({ movie, fetchMovieDetails }) => {
  return (
    <div className="movie-card" onClick={() => fetchMovieDetails(movie.imdbID)}>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title} ({movie.Year})</h3>
    </div>
  );
};

export default MovieCard;
