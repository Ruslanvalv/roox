import React from 'react';
import styles from './UserCard.module.scss';
function UserCard({ user, onClick }) {
  return (
    <div className={styles.UserCard}>
      <div>
        <span>ФИО:</span>
        {user.name}
      </div>
      <div>
        <span>город:</span>
        {user.address.city}
      </div>
      <div>
        <p>
          <span>компания:</span>
          {user.company.name}
        </p>
        <a href="#" onClick={(e) => onClick(e, user)}>
          Подробнее
        </a>
      </div>
    </div>
  );
}

export default UserCard;
