import React, {useState} from 'react';

import Description from '../Description';
import VideoElement from '../VideoElement';
import LottieElement from '../LottieElement';
import ImageElement from '../ImageElement';
import Container from '../Container';
import {getExtension} from '../../utils/general';

import {
  headerClass,
  heroClass,
  descriptionClass,
  backgroundClass,
  hideDescriptionClass,
  hideDescriptionIconClass,
  hideDescriptionTextClass,
  isHidden,
} from './style.scss';

const Header = (props) => {
  const {
    description,
    animation,
    children,
  } = props;

  const [hideDescription, setHideDescription] = useState(false);

  const onSetHideDescriptionToggle = () => {
    setHideDescription(() => {
      return !hideDescription;
    });
  }

  const {
    title,
    url,
  } = JSON.parse(animation);
  const ext = getExtension(url);

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

  const circleFill = (hideDescription) ? 'red' : 'green';
  const circleElement = (
    <svg className={hideDescriptionIconClass} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="50" fill={circleFill} />
    </svg>
  );

  const descriptionFullClass = (hideDescription) ? `${descriptionClass} ${isHidden}` : descriptionClass;

  return (
    <header
      className={headerClass}
    >
      <button
        className={hideDescriptionClass}
        onClick={onSetHideDescriptionToggle}
      >
        <span className={hideDescriptionTextClass}>Backdrop</span>
        {circleElement}
      </button>
      <div className={heroClass}>
        <div className={backgroundClass} >
          {getElement()}
        </div>
        {(description) &&
          (
            <div className={descriptionFullClass}>
              <Container>
                <Description description={description} />
              </Container>
            </div>
          )}
      </div>
      {children}
    </header>
  );
};

export default Header;
