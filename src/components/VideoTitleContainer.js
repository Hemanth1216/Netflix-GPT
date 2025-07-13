import React from "react";

const VideoTitleContainer = ({ movieDetails }) => {
  return (
    <div className="w-screen aspect-video pt-[30%] px-24 absolute bg-gradient-to-r from-black">
      <h2 className="text-3xl font-bold text-white">
        {movieDetails.original_title}
      </h2>
      <p className="pt-6 text-lg w-1/4 text-white">{movieDetails.overview}</p>
      {movieDetails.adult}{" "}
      <span className="text-lg border border-black font-medium rounded-[3px] pl-[3px] py-[1px] mr-3 text-white">
        {" "}
        A{" "}
      </span>
      <span className="text-lg text-white">
        rating: {movieDetails.vote_average}
      </span>
      <div className="pt-4">
        <button className="bg-white text-black px-12 py-2 rounded-sm hover:bg-opacity-70">
          Play{" "}
        </button>
        <button className="bg-gray-400 text-black px-12 py-2 rounded-sm bg-opacity-80 ml-3 hover:bg-white">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitleContainer;
