import React, { useEffect, useState } from "react";
import options from "../utils/tmdb";

const VideoBackGround = ({ videoId }) => {
  const [videoKey, setVideoKey] = useState();

  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + videoId + "/videos",
      options
    );
    const json = await data.json();
    const allVideos = json.results;

    const trailer = allVideos.filter((video) => video.type === "Trailer");
    trailer.length > 0
      ? setVideoKey(trailer[0].key)
      : setVideoKey(allVideos[0].key);
  };

  useEffect(() => {
    getTrailer();
  }, []);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" + videoKey + "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
