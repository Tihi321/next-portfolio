import React from 'react'

import {
  headerClass,
} from './Header.scss';

const Header = (props) => {
  const {
    description,
    animation,
    children,
  } = props;
  return (
    <header
      className={headerClass}
    >
      {children}
    </header>
  );
};

export default Header;
