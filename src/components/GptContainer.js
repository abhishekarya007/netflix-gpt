import React, { useRef } from "react";
import { NETFLIX_BACKGROUND } from "../utils/constants";

const GptContainer = () => {
  const query = useRef(null);

  const handleOnClick = () => {
    console.log(query.current.value);
    query.current.value = "";
  };

  return (
    <div>
      <img
        className="absolute"
        src={NETFLIX_BACKGROUND}
        alt="netflix-background"
      ></img>
      <form onSubmit={(ev) => ev.preventDefault()} className="bg-black">
        <div className="absolute flex gap-5 justify-center w-screen pt-52 text-sm">
          <input
            ref={query}
            className="rounded-lg w-1/2 pl-4"
            type="text"
            placeholder="What would you like to see today ?"
          ></input>
          <button
            onClick={handleOnClick}
            className="bg-red-500 text-white font-bold px-5 py-2 text-lg rounded-lg"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptContainer;
