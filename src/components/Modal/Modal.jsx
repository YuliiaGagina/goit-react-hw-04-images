import { useEffect } from 'react';
import css from './Modal.module.css';


function Modal({ photos, onClose }) {

    useEffect(() => {
    const handleEscapeDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscapeDown);

    return () =>{
      window.removeEventListener('keydown', handleEscapeDown);
    }
  });


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
