import React from 'react';
import {
  videoElementClass,
  videoClass,
} from './style.scss';

const VideoElement = (props) => {
  const {
    mediaUrl,
  } = props;

  return (
    <figure className={videoElementClass}>
      <video
        className={videoClass}
        controls={false}
        muted
        autoPlay
      >
        <source src={mediaUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </figure>
  );
};

export default VideoElement;
