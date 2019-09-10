import React from 'react';
import Container from '../Container';
import SocialBar from '../SocialBar';
import {
  footerClass,
  contentClass,
  socialIconClass,
} from './style.scss';

const Footer = ({options, date}) => {

  return (
    <footer className={footerClass}>
      <Container>
        <div className={contentClass}>
          <span>{`@${date} Tihomir Selak`}</span>
          <SocialBar
            options={options}
            className={socialIconClass}
          />
      </div>
      </Container>
    </footer>
  );
};

export default Footer;
