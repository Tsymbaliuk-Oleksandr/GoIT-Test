import React from 'react';
import { CardForm } from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFollowers } from 'redux/userSelectors';
import { Container } from './Cardlist.styled';

export const CardList = () => {
  const userData = useSelector(getFollowers);
  // console.log(userData);

  return (
    <Container>
      {userData.map(user => (
        <CardForm
          key={user.id}
          id={user.id}
          avatar={user.avatar}
          tweets={user.tweets}
          followers={user.followers}
        />
      ))}
    </Container>
  );
};
