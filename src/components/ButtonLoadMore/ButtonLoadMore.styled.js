import styled from 'styled-components';

export const StyledButton = styled.button`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 16px;
  border-radius: 10px;
  background-color: #471ca9;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  justify-content: center;
  display: flex;
  color: #fff;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    background-color: rgb(111, 19, 99);
  }
`;
