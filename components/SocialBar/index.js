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
} from './style.scss';

const styles = classNames.bind(scss);

const SocialBar = ({options}) => {

  return (
    <div className={socialBarClass}>
      <a className={styles([socialIconClass, socialGithubIcon])} href={options.github}/>
      <a className={styles([socialIconClass, socialLinkedinIcon])} href={options.linkedin}/>
      <a className={styles([socialIconClass, socialYoutubeIcon])} href={options.youtube}/>
      <a className={styles([socialIconClass, socialGooglePlayIcon])} href={options.googlePlay}/>
      <a className={styles([socialIconClass, socialMailIcon])} href={`mailto:${options.contactMail}`}/>
    </div>
  );
};

export default SocialBar;
