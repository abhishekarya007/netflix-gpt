import React from "react";

const MovieCards = ({ poster }) => {
  return (
    <div>
      <img
        alt="movie card"
        src={"https://image.tmdb.org/t/p/w500/" + poster}
      ></img>
    </div>
  );
};

export default MovieCards;
