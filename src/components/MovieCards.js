import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCards = ({ poster, mKey }) => {
  const navigate = useNavigate();
  return (
    <div>
      <img
        onClick={() => navigate("/play/" + mKey)}
        className="w-48 h-56 rounded-lg shadow-lg cursor-pointer"
        alt="movie card"
        src={"https://image.tmdb.org/t/p/w500/" + poster}
      ></img>
    </div>
  );
};

export default MovieCards;
