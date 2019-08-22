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

const Navbar = ({options, menuItems, asPath, colors}) => {

  const [isActive, setIsActive] = useState(false);

  const style = {
    '--about': asPath !== '/' ? colors.about : '#FFFFFF',
    '--android': asPath !== '/android' ? colors.android : '#FFFFFF',
    '--video': asPath !== '/video' ? colors.video : '#FFFFFF',
    '--web': asPath !== '/web' ? colors.web : '#FFFFFF',
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
        <button className={menuIconClass} onClick={setActiveToggle}/>
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
