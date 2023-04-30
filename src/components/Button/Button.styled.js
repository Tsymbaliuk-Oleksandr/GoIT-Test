import styled from 'styled-components';

export const ButtonContainer = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;
  border: none;
  border-radius: 10px;
  padding: 14px 39px;
  margin-bottom: 36px;
  cursor: pointer;
  background-color: ${({ isFollow }) => (isFollow ? '#5CD3A8' : '#EBD8FF')};

  &:hover {
    background-color: ${({ isFollow }) => (isFollow ? '#51b892' : '#d1b6ee')};
  }
`;
