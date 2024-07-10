import options from "../utils/tmdb";
import { useEffect, useState } from "react";

const useGetTrailerKey = (videoId) => {
  const [videoKey, setVideoKey] = useState();

  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + videoId + "/videos",
      options
    );
    const json = await data.json();
    const allVideos = json.results;

    if (allVideos.length === 0) return;

    const trailer = allVideos.filter((video) => video.type === "Trailer");
    trailer.length > 0
      ? setVideoKey(trailer[0].key)
      : setVideoKey(allVideos[0].key);
  };

  useEffect(() => {
    getTrailer();
  }, []);

  return videoKey;
};

export default useGetTrailerKey;
