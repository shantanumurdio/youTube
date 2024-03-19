import React from "react";

const VideoCard = ({ info }) => {
  if (!info) {
    return null;
  }

  const { snippet, statistics } = info;

  if (!snippet) {
    return null; 
  }

  const { channelTitle, title, thumbnails } = snippet;

  if (!thumbnails) {
    return null;
  }

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        className="rounded-md"
        alt="thumbnails"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
