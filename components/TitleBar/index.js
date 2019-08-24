import React from 'react';
import Container from '../Container';

import {
  titleBarClass,
} from './style.scss';

const TitleBar = (props) => {
  const {
    title,
  } = props;

  return (
    <h1
      className={titleBarClass}
    >
      <Container>
        {title}
      </Container>
    </h1>
  );
};

export default TitleBar;
