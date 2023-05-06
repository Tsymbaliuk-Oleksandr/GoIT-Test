// import userIconImg from '../../images/user.png';
import { Container, UserImg } from './UserIcon.styled';

export const UserIcon = ({ avatar }) => {
  return (
    <Container>
      <UserImg src={avatar} alt="user Icon" />
    </Container>
  );
};
