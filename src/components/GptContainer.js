import React from "react";
import { NETFLIX_BACKGROUND } from "../utils/constants";

const GptContainer = () => {
  return (
    <div>
      <img
        className="absolute"
        src={NETFLIX_BACKGROUND}
        alt="netflix-background"
      ></img>
    </div>
  );
};

export default GptContainer;
