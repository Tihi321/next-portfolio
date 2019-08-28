import React from 'react';
import {
  videoClass,
} from './style.scss';

const VideoElement = (props) => {
  const {
    mediaUrl,
  } = props;

  return (
    <video
      className={videoClass}
      controls={false}
      muted
      autoPlay
      loop
    >
      <source src={mediaUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoElement;
