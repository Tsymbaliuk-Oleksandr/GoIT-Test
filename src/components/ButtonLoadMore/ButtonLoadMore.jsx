import { StyledButton } from './ButtonLoadMore.styled';

export const ButtonLoadMore = ({ type = 'button', children, onClick }) => {
  return (
    <StyledButton type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
