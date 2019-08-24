import React, {useState} from 'react';
import classNames from 'classnames';

import Menu from './../Menu';
import SocialBar from './../SocialBar';

import {
  menuIconClass,
  navBarClass,
  menuIconCloseClass,
  modalGlobal,
  titleClass,
  disclaimerClass,
} from './style.scss';

const Navbar = ({
  options,
  menuItems,
  asPath,
  colors,
}) => {

  const [isActive, setIsActive] = useState(false);

  const modalClass = classNames({
    modalClass: true,
    modalActive: isActive,
  });

  const setActiveToggle = () => {
    setIsActive(() => !isActive);
  };

  return (
    <div className={modalGlobal}>
      {(isActive) && <style jsx global>{`
        :root {
          overflow: hidden;
        }
      `}</style>}
      <div className={navBarClass}>
        <button className={menuIconClass} onClick={setActiveToggle}/>
      </div>
      <div className={modalClass}>
        <div className={navBarClass} onClick={setActiveToggle}>
          <button className={menuIconCloseClass}/>
        </div>
        <h1 className={titleClass}>
          Tihomir Selak
        </h1>
        <Menu
          path={asPath}
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
