import {useState} from 'react'
import classNames from 'classnames';
import Link from 'next/link';

import {
  menuIconClass,
  menuClass,
  menuItemClass,
  navBarClass,
  menuIconCloseClass,
  modalGlobal,
  titleClass,
} from './Navbar.scss';

const Navbar = ({color, options}) => {

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
        <nav className={menuClass}>
          <Link href="/">
            <a className={menuItemClass} title="About me page">About</a>
          </Link>
          <Link href="web">
            <a className={menuItemClass} title="Web projects page">Web</a>
          </Link>
          <Link href="video">
            <a className={menuItemClass} title="Video production page">Video</a>
          </Link>
          <Link href="android">
            <a className={menuItemClass} title="Android development projects page">Android</a>
          </Link>
        </nav>
        <div className={navBarClass} onClick={setActiveToggle}>
          <button className={menuIconCloseClass}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
