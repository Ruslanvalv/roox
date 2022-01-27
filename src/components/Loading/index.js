import React from 'react';
import styles from './Loading.module.scss';
function Loading() {
  return (
    <div className={styles.Loading}>
      <h1>Пожалуйста ожидайте, идет загрузка</h1>
      <div className={styles.Preloader}></div>
    </div>
  );
}

export default Loading;
