import React, { useEffect, useState } from 'react';
import axios from 'axios';

import UserCard from '../components/UserCard';
import UserInfo from '../components/UserInfo';
import Button from '../components/UI/Button';
import Loading from '../components/Loading';
import styles from './Main.module.scss';

function Main() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState();

  // запрос на API
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(' https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
      setLoading(false);
    }
    return fetchData();
  }, []);

  // Функция для сортировка по городу/компании
  const sort = (type1, type2) => {
    setSortBy(type1, type2);
    users.sort(function (a, b) {
      if (a[type1][type2] > b[type1][type2]) {
        return 1;
      }
      if (a[type1][type2] < b[type1][type2]) {
        return -1;
      }
      return 0;
    });
  };

  // Функция для возврата на основную страницу после заполнения формы
  const closeForm = () => {
    setSelectedUser();
  };

  //Функция  для перехода в форму отдельной карточки
  const linkClicked = (e, user) => {
    e.preventDefault();
    const nov = {
      Name: user.name,
      'User name': user.username,
      'E-mail': user.email,
      Street: user.address.street,
      City: user.address.city,
      'Zip code': user.address.zipcode,
      Phone: user.phone,
      Website: user.website,
    };
    setSelectedUser(nov);
  };

  return (
    <div className={styles.Main}>
      <div className={styles.SortMenu}>
        <p>Сортировка</p>

        <Button btnClick={sort} sortBy={['address', 'city']}>
          по городу
        </Button>
        <Button btnClick={sort} sortBy={['company', 'name']}>
          по компании
        </Button>
      </div>

      {loading ? (
        <Loading />
      ) : selectedUser ? (
        <UserInfo user={selectedUser} onClose={closeForm} />
      ) : (
        <div className={styles.UsersList}>
          <h1>Список пользователей</h1>
          {users.map((item) => (
            <UserCard user={item} onClick={linkClicked} key={item.id} />
          ))}

          <p className={styles.UserCounter}>Найдено {users.length} пользователей</p>
        </div>
      )}
    </div>
  );
}

export default Main;
