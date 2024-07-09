import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, moviesList }) => {
  if (!moviesList) return;
  return (
    <div>
      <div>{title}</div>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {moviesList.map((movie) => (
            <MovieCards poster={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
