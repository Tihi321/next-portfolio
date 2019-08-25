import React from 'react';
import {
  cardClass,
  cardIimageClass,
  cardITitleClass,
} from './style.scss';

const Card = ({link, image, title}) => {

  return (
    <a
      className={cardClass}
      href={link}
    >
      <div className={cardIimageClass} style={{backgroundImage: `url(${image.url})`}} />
      <h2 className={cardITitleClass}>{title}</h2>
    </a>
  );
};

export default Card;
