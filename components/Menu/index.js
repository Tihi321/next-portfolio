import React from 'react';
import Link from 'next/link';
import classNames from 'classnames/bind';

import scss, {
  menuClass,
  menuItemClass,
  activeMenuItem,
} from './style.scss';

const styles = classNames.bind(scss);


const Menu = ({items, path, colors}) => {

  const aditionalItems = (items) ? items.map((item, id) => {
    return (
      <a key={id} className={menuItemClass} href={item.link} style={{'--color': item.color || '#FFFFFF'}} title={item.title}>
        {item.title}
      </a>
    );
  }) : '';

  return (
    <nav className={menuClass}>
      <Link href="/">
        <a className={styles([menuItemClass, {activeMenuItem: (path === '/') && activeMenuItem}])} style={{'--color': colors.about || '#FFFFFF'}} title="About me page">About</a>
      </Link>
      <Link href="web">
        <a className={styles([menuItemClass, {activeMenuItem: (path === '/web') && activeMenuItem}])} style={{'--color': colors.web || '#FFFFFF'}} title="Web projects page">Web</a>
      </Link>
      <Link href="video">
        <a className={styles([menuItemClass, {activeMenuItem: (path === '/video') && activeMenuItem}])} style={{'--color': colors.video || '#FFFFFF'}} title="Video production page">Video</a>
      </Link>
      <Link href="android">
        <a className={styles([menuItemClass, {activeMenuItem: (path === '/android') && activeMenuItem}])} style={{'--color': colors.android || '#FFFFFF'}} title="Android development projects page">Android</a>
      </Link>
      {aditionalItems}
    </nav>
  );
};

export default Menu;
