import {
  HeaderContainer as Container,
  HeaderLogo as Logo,
  HeaderButton as Button,
} from '../styles';
import logo from '../assets/misc/logo.svg';

export const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt="huddle logo" />
      <Button>Try It Free</Button>
    </Container>
  );
};
