import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  position: relative;
  width: 380px;
  height: 460px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  border-radius: 20px;
`;

export const TweetsContainer = styled.div`
  position: relative;
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  color: #ebd8ff;
  line-height: 1.2;
`;

export const FollowersContainer = styled.div`
  position: relative;
  margin-bottom: 26px;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;
  color: #ebd8ff;
  line-height: 1.2;
`;
