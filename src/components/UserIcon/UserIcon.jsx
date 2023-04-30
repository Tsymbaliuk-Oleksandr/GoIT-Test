import userIconImg from '../../images/user.png';
import { Container, UserImg } from './UserIcon.styled';

export const UserIcon = () => {
  return (
    <Container>
      <UserImg src={userIconImg} alt="user Icon" />
    </Container>
  );
};
