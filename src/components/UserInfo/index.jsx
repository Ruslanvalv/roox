import React from 'react';

import Button from '../UI/Button';
import Input from '../UI/Input';

import styles from './UserInfo.module.scss';

function UserInfo({ user, onClose }) {
  const [active, setActive] = React.useState('disabled');
  const [newData, setNewData] = React.useState(user);
  const [isEmpty, setIsEmpty] = React.useState(false);

  const keys = Object.keys(user);

  //Функция для изменения инпута
  const onChangeHandler = (event, inputName) => {
    setIsEmpty(false);

    setNewData({ ...newData, [inputName]: event.target.value });
    if (event.target.value === '') setIsEmpty(true);
  };

  //Функция для разрешения заполнения инпутов
  const onClickHandler = () => {
    setActive('');
  };

  //Функция для формирования JSON в консоль
  const onSendBtn = () => {
    if (!isEmpty) {
      onClose();
      console.log(JSON.stringify(newData));
    }
  };

  return (
    <div className={styles.UserInfo}>
      <div className={styles.Header}>
        <h1>Профиль пользователя</h1>
        <Button btnClick={onClickHandler}>Редактировать</Button>
      </div>
      <form className={styles.Form}>
        {keys.map((key) => {
          return (
            <Input
              inputName={key}
              inputValue={user[key]}
              isEmpty={newData}
              active={active}
              change={onChangeHandler}
              key={key}
            />
          );
        })}
        <label>
          <p>Comment</p>
          <textarea onChange={(e) => onChangeHandler(e, 'Comment')} disabled={active} />
        </label>
      </form>
      <Button btnClick={onSendBtn} active={active} btnStyle="send">
        Отправить
      </Button>
    </div>
  );
}

export default UserInfo;
