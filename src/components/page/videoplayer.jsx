import React from 'react';

const VideoPlayer = ({ videoSrc, title }) => {
  return (
    <div className="anchor">
      <video width="800" height="480" controls>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>{title}</h2>
    </div>
  );
};

export default VideoPlayer;