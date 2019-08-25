import React from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import uuidv4 from 'uuid/v4';
import classNames from 'classnames/bind';

import scss, {
  menuClass,
  menuItemClass,
  activeMenuItem,
} from './style.scss';

const styles = classNames.bind(scss);


const Menu = ({items, colors}) => {

  const {route} = useRouter();

  const aditionalItems = (items) ? items.map((item) => {
    return (
      <a key={uuidv4()} className={menuItemClass} href={item.link} style={{'--color': item.color || '#FFFFFF'}} title={item.title}>
        {item.title}
      </a>
    );
  }) : '';

  return (
    <nav className={menuClass}>
      <Link href="/">
        <a
          href="/"
          className={styles([menuItemClass, {activeMenuItem: (route === '/') && activeMenuItem}])}
          style={{'--color': colors.about || '#FFFFFF'}}
          title="About me page"
        >
            About
        </a>
      </Link>
      <Link href="web">
        <a
          href="web"
          className={styles([menuItemClass, {activeMenuItem: (route === '/web') && activeMenuItem}])}
          style={{'--color': colors.web || '#FFFFFF'}}
          title="Web projects page"
        >
            Web
        </a>
      </Link>
      <Link href="video">
        <a
          href="video"
          className={styles([menuItemClass, {activeMenuItem: (route === '/video' || '/video/[slug]') && activeMenuItem}])}
          style={{'--color': colors.video || '#FFFFFF'}}
          title="Video production page"
        >
          Video
        </a>
      </Link>
      <Link href="android">
        <a
          href="android"
          className={styles([menuItemClass, {activeMenuItem: (route === '/android') && activeMenuItem}])}
          style={{'--color': colors.android || '#FFFFFF'}}
          title="Android development projects page"
        >
          Android
        </a>
      </Link>
      {aditionalItems}
    </nav>
  );
};

export default Menu;
