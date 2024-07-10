import React from "react";
import MovieCards from "./MovieCards";

const MovieList = ({ title, moviesList }) => {
  if (!moviesList) return;
  return (
    <div>
      <div>{title}</div>
      <div className="flex flex-col gap-4 overflow-scroll mt-8">
        <div className="flex w-max gap-2 overflow-x-scroll">
          {moviesList.map((movie) => (
            <MovieCards
              key={movie?.id}
              poster={movie?.poster_path}
              mKey={movie?.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
