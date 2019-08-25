import React from 'react';

import Description from '../Description';
import VideoElement from '../VideoElement';
import LottieElement from '../LottieElement';
import ImageElement from '../ImageElement';
import Container from '../Container';
import generalHelper from '../../halpers/general-helper';

import {
  headerClass,
  heroClass,
  descriptionClass,
  bottomBarClass,
} from './style.scss';

const Header = (props) => {
  const {
    description,
    animation,
    children,
  } = props;

  const {
    title,
    url,
  } = JSON.parse(animation);
  const ext = generalHelper.getExtension(url);

  const getElement = () => {
    switch (ext) {
    case 'mp4':
      return <VideoElement mediaUrl={url} />;
    case 'json':
      return <LottieElement mediaUrl={url} />;
    case 'jpg':
    case 'png':
    case 'svg':
      return <ImageElement mediaUrl={url} mediaAlt={title} />;
  
    default:
      break;
    }
    return '';
  };

  return (
    <header
      className={headerClass}
    >
      <div className={heroClass}>
        {getElement()}
        {(description) &&
          (
            <div className={descriptionClass}>
              <Container>
                <Description description={description} />
              </Container>
            </div>
          )}
      </div>
      <div className={bottomBarClass}>
        {children}
      </div>
    </header>
  );
};

export default Header;
