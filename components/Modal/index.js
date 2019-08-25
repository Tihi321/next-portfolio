import React, {useState, useEffect} from 'react';
import classNames from 'classnames';

import {
  modalParentGlobal,
  navBarClass,
  modalIconCloseClass,
  modalButtonsText,
  centeredElement,
} from './style.scss';

const Modal = ({
  children,
  onClose,
}) => {

  const [modalActive, setModalActive] = useState(false);

  const modalClass = classNames({
    modalParentClass: true,
    modalParentActive: modalActive,
  });

  useEffect(() => {
    setModalActive(true);
  }, []);

  const onCloseCallback = () => {
    setModalActive(false);
    onClose();
  };

  return (
    <div className={modalParentGlobal}>
      {(modalActive) &&
      (
        <style jsx global>
          {`
            :root {
              overflow: hidden;
            }
          `}
        </style>
      )}
      <div className={modalClass}>
        <div className={navBarClass}>
          <button type="button" className={modalIconCloseClass} onClick={onCloseCallback}>
            <span className={modalButtonsText}>
              Return to Videos
            </span>
          </button>
        </div>
        <div className={centeredElement}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
