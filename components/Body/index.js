import React from 'react';
import Container from '../Container';
import {bodyClass} from './style.scss';

const Body = ({children}) => {
  return (
    <div className={bodyClass}>
      <Container>{children}</Container>
    </div>
  );
};

export default Body;
