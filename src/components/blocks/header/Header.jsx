import { Logo } from '../../ui/logo/Logo';
import { AuthContainer } from './auth/AuthContainer';
import { StyledHeader } from './styles';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <AuthContainer />
    </StyledHeader>
  );
};
