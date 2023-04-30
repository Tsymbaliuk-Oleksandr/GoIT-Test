import logotype from '../../images/logo.png';
import { Container, LogoImage } from './Logo.styled';

export const Logo = () => {
  return (
    <Container>
      <LogoImage src={logotype} alt="GoIT" />
    </Container>
  );
};
