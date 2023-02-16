import css from './Modal.module.css';
import { useState } from 'react';

function Modal({ photos, onClose }) {
  useState(() => {
    window.addEventListener('keydown', handleEscapeDown);

    window.removeEventListener('keydown', handleEscapeDown);
  }, [photos]);

  const handleEscapeDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div onClick={handleBackdropClick} className={css.Overlay}>
      <div className={css.Modal}>
        <img src={photos} alt="qwe" />
      </div>
    </div>
  );
}

export default Modal;
