import React from 'react'

import {
  titleBarClass,
} from './TitleBar.scss';

const TitleBar = (props) => {
  const {
    title,
    color,
  } = props;

  const style = {
    backgroundColor: color,
  };
  return (
    <h1
      className={titleBarClass}
      style={style}
    >
      {title}
    </h1>
  );
};

export default TitleBar;
