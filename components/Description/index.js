import React from 'react';

import {
  descriptionClass,
} from './style.scss';

const Description = (props) => {
  const {
    description,
  } = props;

  return (
    <div
      dangerouslySetInnerHTML={{__html: description}}
      className={descriptionClass}
    />
  );
};

export default Description;
