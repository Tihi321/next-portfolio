import React from 'react'

import {
  footerClass,
} from './footer.scss';

const Footer = ({color, options, date}) => {

  const style = {
    backgroundColor: color,
  };

  return (
    <footer
      style={style}
      className={footerClass}
    >
      <span>{`@ ${date} Tihomir Selak`}</span>
    </footer>
  );
};

export default Footer;
