import React from 'react';
import classNames from 'classnames/bind';

import scss, {
  socialBarClass,
  socialMailIcon,
  socialLinkedinIcon,
  socialYoutubeIcon,
  socialGooglePlayIcon,
  socialWordPressIcon,
  socialGithubIcon,
  socialIconClass,
  socialLinkContent,
} from './style.scss';

const styles = classNames.bind(scss);

const SocialBar = ({options, className}) => {

  const socialClassName = className || socialIconClass;

  return (
    <div className={socialBarClass}>
      <a
        alt="github"
        className={styles([socialClassName, socialGithubIcon])}
        href={options.github}
      >
        <span
          className={socialLinkContent}
        >
          Github
        </span>
      </a>
      <a
        alt="linkedin"
        className={styles([socialClassName, socialLinkedinIcon])}
        href={options.linkedin}
      >
        <span
          className={socialLinkContent}
        >
          Linkedin
        </span>
      </a>
      <a
        alt="WordPress"
        className={styles([socialClassName, socialWordPressIcon])}
        href={options.wordPress}
      >
        <span
          className={socialLinkContent}
        >
          WordPress
        </span>
      </a>
      <a
        alt="youtube"
        className={styles([socialClassName, socialYoutubeIcon])}
        href={options.youtube}
      >
        <span
          className={socialLinkContent}
        >
          Youtube
        </span>
      </a>
      <a
        alt="googlePlay"
        className={styles([socialClassName, socialGooglePlayIcon])}
        href={options.googlePlay}
      >
        <span
          className={socialLinkContent}
        >
          Google play
        </span>
      </a>
      <a
        alt="e-mail"
        className={styles([socialClassName, socialMailIcon])}
        href={`mailto:${options.contactMail}`}
      >
        <span
          className={socialLinkContent}
        >
          E-mail
        </span>
      </a>
    </div>
  );
};

export default SocialBar;
