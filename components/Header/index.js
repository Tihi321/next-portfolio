import React from 'react'

import Description from '../Description';
import VideoElement from '../VideoElement';
import LottieElement from '../LottieElement';
import MediaElement from '../MediaElement';
import generalHelper from '../../halpers/general-helper';

import {
  headerClass,
} from './Header.scss';

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

  const Element = () => {
    switch (ext) {
      case 'mp4':
        return <VideoElement mediaUrl={url} />
      case 'json':
        return <LottieElement mediaUrl={url} />
      case 'jpg':
      case 'png':
      case 'svg':
        return <MediaElement mediaUrl={url} mediaAlt={title} />
    
      default:
        break;
    }
  };

  return (
    <header
      className={headerClass}
    >
      <Element />
      <div>
        {(description) && <Description description={description}/>}
      </div>
      {children}
    </header>
  );
};

export default Header;
