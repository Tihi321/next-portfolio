import React from 'react'

import {
  titleBarClass,
} from './TitleBar.scss';

const TitleBar = (props) => {
  const {
    title,
  } = props;

  return (
    <h1
      className={titleBarClass}
    >
      {title}
    </h1>
  );
};

export default TitleBar;
