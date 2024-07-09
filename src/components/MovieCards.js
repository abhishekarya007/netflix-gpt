import React from "react";

const MovieCards = ({ poster }) => {
  return (
    <div>
      <img
        className="w-48 h-36 rounded-lg shadow-lg"
        alt="movie card"
        src={"https://image.tmdb.org/t/p/w500/" + poster}
      ></img>
    </div>
  );
};

export default MovieCards;
