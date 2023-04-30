import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  margin-bottom: 26px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;

  &::after {
    content: '';
    margin-bottom: 26px;
    position: absolute;
    left: 80px;
    height: 8px;
    width: 150px;
    background-color: #ebd8ff;

    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }

  &::before {
    content: '';
    margin-bottom: 26px;
    position: absolute;
    right: 80px;
    height: 8px;
    width: 150px;
    background-color: #ebd8ff;
  }
`;

export const UserImg = styled.img`
  position: absolute;
  margin-bottom: 26px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 9px solid #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
