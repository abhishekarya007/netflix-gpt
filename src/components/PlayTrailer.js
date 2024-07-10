import React from "react";
import { useParams } from "react-router-dom";
import VideoBackGround from "./VideoBackGround";

const PlayTrailer = () => {
  const { id } = useParams();

  return (
    <div>
      <VideoBackGround videoId={id} />
    </div>
  );
};

export default PlayTrailer;
