import { ButtonContainer } from './Button.styled';

export const Button = ({ isFollow, onClick }) => {
  return (
    <ButtonContainer onClick={onClick} isFollow={isFollow}>
      {isFollow ? 'following' : 'follow'}
    </ButtonContainer>
  );
};
