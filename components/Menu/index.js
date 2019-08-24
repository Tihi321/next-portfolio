import React from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';

import scss, {
  menuClass,
  menuItemClass,
  menuItemBottomElement,
  menuItemAbout,
  menuItemAndroid,
  menuItemVideo,
  menuItemWeb,
} from './style.scss';

const styles = classNames.bind(scss);


const Menu = ({items}) => {

  const aditionalItems = (items) ? items.map((item, id) => {
    return (
      <a key={id} className={menuItemClass} href={item.link} title="Android development projects page">
        {item.title}
        <span className={menuItemBottomElement} style={{backgroundColor: item.color}}></span>
      </a>
    );
  }) : '';

  return (
    <nav className={menuClass}>
      <Link href="/">
        <a className={styles([menuItemClass, menuItemAbout])} title="About me page">About</a>
      </Link>
      <Link href="web">
        <a className={styles([menuItemClass, menuItemWeb])} title="Web projects page">Web</a>
      </Link>
      <Link href="video">
        <a className={styles([menuItemClass, menuItemVideo])} title="Video production page">Video</a>
      </Link>
      <Link href="android">
        <a className={styles([menuItemClass, menuItemAndroid])} title="Android development projects page">Android</a>
      </Link>
      {aditionalItems}
    </nav>
  );
};

export default Menu;
