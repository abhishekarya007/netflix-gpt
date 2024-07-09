import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  if (Object.keys(movies).length === 0) return;
  return (
    <div className="bg-black">
      <div className="flex flex-col gap-10 text-white -mt-44 relative z-50 ml-10 pb-10">
        <MovieList title="Popular" moviesList={movies?.popular} />
        <MovieList title="Now Playing" moviesList={movies?.nowPlaying} />
        <MovieList title="Top Rated" moviesList={movies?.topRated} />
        <MovieList title="Upcoming" moviesList={movies?.upcoming} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
