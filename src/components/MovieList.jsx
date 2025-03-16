import React from "react";
import MovieCard from "./MovieCard";
import "./../styles/MovieList.css";

const MovieList = ({ movies, fetchMovieDetails, page, totalPages, searchMovies }) => {
  return (
    <div>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} fetchMovieDetails={fetchMovieDetails} />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {page > 1 && <button onClick={() => searchMovies(page - 1)}>Previous</button>}
        <span> Page {page} of {totalPages} </span>
        {page < totalPages && <button onClick={() => searchMovies(page + 1)}>Next</button>}
      </div>
    </div>
  );
};

export default MovieList;
