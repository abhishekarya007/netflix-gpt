import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movie);

  if (Object.keys(movies).length === 0) return;
  return (
    <>
      <div className="bg-black">
        <div className="flex flex-col text-white -mt-56 relative z-50">
          <MovieList title="Now Playing" moviesList={movies?.nowPlaying} />
          <MovieList title="Now Playing" moviesList={movies?.nowPlaying} />
          <MovieList title="Now Playing" moviesList={movies?.nowPlaying} />
          <MovieList title="Now Playing" moviesList={movies?.nowPlaying} />
        </div>
      </div>
    </>
  );
};

export default SecondaryContainer;
