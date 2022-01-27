import React from 'react';
import styles from './Button.module.scss';
function Button({ btnStyle, SendBtn, active, children, sortBy, btnClick }) {
  const onClickHandler = () => {
    if (sortBy) return btnClick(sortBy[0], sortBy[1]);
    else return btnClick();
  };
  return (
    <div className={styles.Button}>
      <button
        onClick={() => onClickHandler()}
        className={btnStyle ? styles.SendBtn : null}
        disabled={active}>
        {children}
      </button>
    </div>
  );
}

export default Button;
