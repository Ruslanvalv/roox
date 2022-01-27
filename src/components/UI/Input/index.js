import React from 'react';
import styles from './Input.module.scss';
function Input({ inputName, inputValue, active, change, isEmpty }) {
  return (
    <label className={styles.Label}>
      <p>{inputName}</p>
      <input
        type="text"
        className={!isEmpty[inputName] ? styles.Empty : null}
        defaultValue={inputValue}
        onClick={(e) => {}}
        onChange={(e) => {
          change(e, inputName);
        }}
        disabled={active}
      />
    </label>
  );
}

export default Input;
