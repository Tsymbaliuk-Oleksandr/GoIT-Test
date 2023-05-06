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
  const newData = followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <Container key={id}>
      <Logo />
      <PictureForm />
      <UserIcon avatar={avatar} />
      <TweetsContainer>{tweets} Tweets</TweetsContainer>
      <FollowersContainer>{newData} Followers</FollowersContainer>
      {/* <Button isFollow={isFollow} onClick={onToggleFollowing} /> */}
      <Button>Follow</Button>
    </Container>
  );
};
