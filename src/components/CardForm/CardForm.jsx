import { Logo } from '../Logo/Logo.jsx';
import { PictureForm } from 'components/PictureForm/PictureForm';
import { UserIcon } from 'components/UserIcon/UserIcon';
import { Button } from 'components/Button/Button';
import {
  Container,
  TweetsContainer,
  FollowersContainer,
} from './CardForm.styled.js';

import { useSelector, useDispatch } from 'react-redux';
import { addFollow, removeFollow } from 'redux/userSlice.js';
import { getFollowers, isFollower } from 'redux/userSelectors.js';

export const CardForm = ({ id, avatar, tweets }) => {
  const followers = useSelector(getFollowers);
  const isFollow = useSelector(isFollower);

  const dispatch = useDispatch();

  const onToggleFollowing = () => {
    if (isFollow) {
      dispatch(removeFollow());
    }
    if (!isFollow) {
      dispatch(addFollow());
    }
  };

  const newData = followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <Container key={id}>
      <Logo />
      <PictureForm />
      <UserIcon avatar={avatar} />
      <TweetsContainer tweets={tweets}>777 tweets</TweetsContainer>
      <FollowersContainer followers={followers}>
        {newData} Followers
      </FollowersContainer>
      <Button isFollow={isFollow} onClick={onToggleFollowing} />
    </Container>
  );
};
