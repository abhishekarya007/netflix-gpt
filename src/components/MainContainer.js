import React from "react";
import VideoBackGround from "./VideoBackGround";
import { useSelector } from "react-redux";
import VideosTitle from "./VideosTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.popular);

  if (!movies) return;

  const { title, overview, id } = movies[0];

  return (
    <div className="bg-black text-white w-screen h-screen">
      <VideosTitle title={title} overview={overview} />
      <VideoBackGround videoId={id} />
    </div>
  );
};

export default MainContainer;
