import React from 'react';
import classNames from 'classnames';

import Menu from '../Menu';
import SocialBar from '../SocialBar';

import {
  menuIconClass,
  navBarClass,
  menuIconCloseClass,
  modalGlobal,
  titleClass,
  disclaimerClass,
  menuButtonsText,
} from './style.scss';

const Navbar = ({
  options,
  menuItems,
  colors,
  openNav,
  openNavCallback,
}) => {

  const modalClass = classNames({
    modalClass: true,
    modalActive: openNav,
  });

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
      <div className={navBarClass}>
        <button id="open-menu" type="button" className={menuIconClass} onClick={setActiveToggle}>
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
        <h1 className={titleClass}>
          Tihomir Selak
        </h1>
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
