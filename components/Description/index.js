import React from 'react'

import {
  backDropClass,
  descriptionClass,
} from './Description.scss';

const Description = (props) => {
  const {
    description,
  } = props;

  return (
    <div
      className={backDropClass}
    >
      <div
        dangerouslySetInnerHTML={{__html: description}}
        className={descriptionClass}
      />
    </div>
  );
};

export default Description;
