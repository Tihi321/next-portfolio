import React from 'react';
import classNames from 'classnames';
import { useTween } from 'react-use';

import Menu from '../Menu';
import SocialBar from '../SocialBar';

import scss, {
  menuIconClass,
  navBarClass,
  menuIconCloseClass,
  modalGlobal,
  titleClass,
  disclaimerClass,
  menuButtonsText,
  logoClass,
  linkClass,
  linkImage,
} from './style.scss';

const Navbar = ({
  options,
  menuItems,
  colors,
  openNav,
  openNavCallback,
  logo,
}) => {

  const value = useTween('inOutExpo', 350, 200);
  const openMenuIcontranslate = (100 - (value * 100));

  const modalClass = classNames({
    modalClass: true,
    modalActive: openNav,
  });

  const styles = classNames.bind(scss);

  const setActiveToggle = () => {
    openNavCallback(!openNav);
  };

  return (
    <div className={modalGlobal}>
      {(openNav) &&
      (
        <style jsx global>
          {`
            :root {
              overflow: hidden;
            }
          `}
        </style>
      )}
      <div
        className={navBarClass}
        style={{
          transform: `translateY(-${openMenuIcontranslate}%)`,
        }}
      >
        <button
          id="open-menu"
          type="button"
          className={menuIconClass}
          onClick={setActiveToggle}
        >
          <span className={menuButtonsText}>
            Open Menu
          </span>
        </button>
      </div>
      <div className={modalClass}>
        <div className={navBarClass}>
          <button type="button" className={menuIconCloseClass} onClick={setActiveToggle}>
            <span className={menuButtonsText}>
              Close Menu
            </span>
          </button>
        </div>
        {(!logo) ?
            <a
            href='/'
            className={linkClass}
            >
              <h1 className={titleClass}>Tihomimir Selak</h1>
            </a> :
            <a
              href='/'
              className={styles([linkClass, linkImage])}
            >
              <img
                src={logo}
                className={logoClass}
                alt="Tihomir Selak Portfolio"
              />
            </a>
          }
        <Menu
          colors={colors}
          items={menuItems}
        />
        <SocialBar
          options={options}
        />
        <div className={disclaimerClass}>
          NextJs Frontend, Wordpress Backend
        </div>
      </div>
    </div>
  );
};

export default Navbar;
