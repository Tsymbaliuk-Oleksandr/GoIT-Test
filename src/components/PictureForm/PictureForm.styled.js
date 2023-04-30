import styled from 'styled-components';
import pictureImg from '../../images/picture.png';

export const Container = styled.div`
  background-image: url(${pictureImg});
  position: absolute;
  top: 28px;
  left: 36px;
  width: 308px;
  height: 168px;
  z-index: 1000;
`;

export const FormImg = styled.div`
  width: 100%;
  height: 100%;
  display: block;
`;
