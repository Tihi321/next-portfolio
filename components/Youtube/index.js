import React from 'react';
import {getYoutubeId} from '../../halpers/general';
import {
  youtubeContainer,
  iframeObject,
} from './style.scss';

const YoutubeElement = (props) => {
  const {
    title,
    link,
  } = props;

  const youtubeId = getYoutubeId(link);

  return (
    <div className={youtubeContainer}>
      <iframe
        title={title}
        className={iframeObject}
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubeElement;
