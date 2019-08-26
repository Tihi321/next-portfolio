import React from 'react';

import {
  imageElementClass,
} from './style.scss';

const ImageElement = (props) => {
  const {
    mediaAlt,
    mediaUrl,
  } = props;

  return (
    <div className={imageElementClass} style={{ backgroundImage: `url(${mediaUrl})` }} aria-label={mediaAlt} />
  );
};

export default ImageElement;
