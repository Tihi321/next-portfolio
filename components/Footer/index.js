import React from 'react';
import {
  footerClass,
} from './style.scss';

const Footer = ({options, date}) => {
  
  return (
    <footer
      className={footerClass}
    >
      <span>{`@ ${date} Tihomir Selak`}</span>
    </footer>
  );
};

export default Footer;
