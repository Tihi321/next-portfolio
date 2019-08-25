import React from 'react';
import Container from '../Container';
import {footerClass} from './style.scss';

const Footer = ({options, date}) => {

  return (
    <footer className={footerClass}>
      <Container>
        <span>{`@${date} Tihomir Selak`}</span>
      </Container>
    </footer>
  );
};

export default Footer;
