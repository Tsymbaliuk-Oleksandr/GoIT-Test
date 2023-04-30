import React, { useState, useEffect } from 'react';
import { CardForm } from '../CardForm/CardForm';
import users from '../../services/users.json';

export const CardList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(users);
  }, []);

  return (
    <>
      {userData.map(user => (
        <CardForm
          key={user.id}
          id={user.id}
          avatar={user.avatar}
          tweets={user.tweets}
          followers={user.followers}
          isFollow={user.isFollow}
        />
      ))}
    </>
  );
};
