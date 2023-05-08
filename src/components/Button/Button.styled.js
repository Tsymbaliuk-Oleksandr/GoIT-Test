import styled from 'styled-components';

export const ButtonContainer = styled.button`
  font-size: 18px;
  width: 196px;
  height: 50px;
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;
  color: #373737;
  border: none;
  border-radius: 10px;
  padding: 14px 39px;
  margin-bottom: 36px;
  cursor: pointer;
  background-color: ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')};

  &:hover {
    background-color: ${props => (props.isFollow ? '#5CD3A8' : '#EBD8FF')};
  }
`;
