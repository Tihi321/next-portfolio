import {useState} from 'react'
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
} from './Navbar.scss';

const Navbar = ({color, options, menuItems}) => {

  const [isActive, setIsActive] = useState(false);

  const style = {
    backgroundColor: color,
  };

  let modalClass = classNames({
    modalClass: true,
    modalActive: isActive,
  });

  const setActiveToggle = () => {
    setIsActive(() => !isActive );
  }

  return (
    <div className={modalGlobal}>
      <div className={navBarClass}>
        <button className={menuIconClass} style={style} onClick={setActiveToggle}/>
      </div>
      <div className={modalClass} style={style}>
        <div className={navBarClass} onClick={setActiveToggle}>
          <button className={menuIconCloseClass}/>
        </div>
        <h1 className={titleClass}>
          Tihomir Selak
        </h1>
        <Menu
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
