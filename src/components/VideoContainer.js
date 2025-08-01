import React from "react";

const VideoContainer = ({ youtubeId }) => {
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          youtubeId +
          "?autoplay=1&mute=1&loop=1&playlist=" +
          youtubeId
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoContainer;
