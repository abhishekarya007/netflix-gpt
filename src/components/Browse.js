import React, { useEffect } from "react";
import Header from "./Header";
import options from "../utils/tmdb";
import { useDispatch } from "react-redux";
import { addMovies } from "../utils/movieSlice";
import MainContainer from "./MainContainer";

const Browse = () => {
  const dispatch = useDispatch();

  const getPlayingNowList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const json = await data.json();
    dispatch(addMovies(json.results));
  };

  useEffect(() => {
    getPlayingNowList();
  }, []);

  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
