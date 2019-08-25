import React from 'react';
import classNames from 'classnames/bind';

import scss, {
  socialBarClass,
  socialMailIcon,
  socialLinkedinIcon,
  socialYoutubeIcon,
  socialGooglePlayIcon,
  socialGithubIcon,
  socialIconClass,
  socialLinkContent,
} from './style.scss';

const styles = classNames.bind(scss);

const SocialBar = ({options}) => {

  return (
    <div className={socialBarClass}>
      <a
        alt="github"
        className={styles([socialIconClass, socialGithubIcon])}
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
        className={styles([socialIconClass, socialLinkedinIcon])}
        href={options.linkedin}
      >
        <span
          className={socialLinkContent}
        >
          Linkedin
        </span>
      </a>
      <a
        alt="youtube"
        className={styles([socialIconClass, socialYoutubeIcon])}
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
        className={styles([socialIconClass, socialGooglePlayIcon])}
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
        className={styles([socialIconClass, socialMailIcon])}
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
