import React from 'react';

const ImageElement = (props) => {
  const {
    mediaAlt,
    mediaUrl,
  } = props;

  return (
    <figure className="image-element">
      <img className="media-image-class" src={mediaUrl} alt={mediaAlt} />
    </figure>
  );
};

export default ImageElement;
