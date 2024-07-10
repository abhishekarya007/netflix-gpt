import React from "react";
import { useNavigate } from "react-router-dom";

const VideosTitle = ({ title, overview, id }) => {
  const navigate = useNavigate();
  return (
    <div className="absolute w-screen aspect-video bg-gradient-to-r from-black">
      <div className="mt-[20%] ml-10 w-96">
        <div className="text-6xl p-2">{title}</div>
        <div className="text-xs px-2 pt-2 pb-4">{overview}</div>
      </div>
      <div className="flex gap-4 mx-12 text-sm">
        <button
          onClick={() => navigate("/browse/" + id)}
          className="px-8 py-3 text-black bg-white rounded-lg"
        >
          {" "}
          ▶ Play
        </button>
        <button className="px-6 py-3 bg-gray-500 bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideosTitle;
