import React from 'react'

import {
  containerClass,
} from './style.scss';

const Container = ({children}) => {
  
  return (
    <div
      className={containerClass}
    >
      {children}
    </div>
  );
};

export default Container;
