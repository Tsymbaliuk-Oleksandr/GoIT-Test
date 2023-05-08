import { ButtonContainer } from './Button.styled';

export const Button = ({ isFollow, onClick }) => {
  return (
    <ButtonContainer onClick={onClick} isFollow={isFollow}>
      {isFollow ? 'Following' : 'Follow'}
    </ButtonContainer>
  );
};
