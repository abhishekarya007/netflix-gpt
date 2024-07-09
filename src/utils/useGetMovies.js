import { useDispatch } from "react-redux";
import {
  addNowPlayingMovies,
  addPopularMovies,
  addTopRatesMovies,
  addUpcomingMovies,
} from "./movieSlice";
import { useEffect } from "react";
import options from "./tmdb";

const useGetMovies = () => {
  const dispatch = useDispatch();

  const getPopularList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?&page=1",
      options
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  const getPlayingNowList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      options
    );

    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  const getTopRatedList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?&page=1",
      options
    );
    const json = await data.json();
    dispatch(addTopRatesMovies(json.results));
  };

  const getUpcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?&page=1",
      options
    );

    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getPlayingNowList();
    getPopularList();
    getTopRatedList();
    getUpcoming();
  }, []);
};

export default useGetMovies;
