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
    <img className={imageElementClass} src={mediaUrl} alt={mediaAlt} />
  );
};

export default ImageElement;
