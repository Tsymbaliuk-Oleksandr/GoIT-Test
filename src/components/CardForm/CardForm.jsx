import React, { useState } from 'react';
import { Logo } from '../Logo/Logo.jsx';
import { PictureForm } from 'components/PictureForm/PictureForm';
import { UserIcon } from 'components/UserIcon/UserIcon';
import { Button } from 'components/Button/Button';
import {
  Container,
  TweetsContainer,
  FollowersContainer,
} from './CardForm.styled.js';

export const CardForm = ({ id, avatar, tweets, followers }) => {
  const [followStatus, setFollowStatus] = useState(false);
  const [currentFollowers, setCurrentFollowers] = useState(followers);

  const handleToggleFollowing = () => {
    setFollowStatus(!followStatus); // Оновлюємо статус кнопки
    // console.log(followStatus);
    if (followStatus) {
      setCurrentFollowers(prev => prev - 1);
    } else {
      setCurrentFollowers(prev => prev + 1);
    }
  };

  const newData = currentFollowers
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <Container key={id}>
      <Logo />
      <PictureForm />
      <UserIcon avatar={avatar} />
      <TweetsContainer>{tweets} Tweets</TweetsContainer>
      <FollowersContainer>{newData} Followers</FollowersContainer>
      <Button isFollow={followStatus} onClick={handleToggleFollowing} />
      {/* Оновлення компонента Button */}
    </Container>
  );
};
