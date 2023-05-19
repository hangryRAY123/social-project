import { StyledFooter } from './styles';

export const Footer = () => {
  return (
    <StyledFooter>
      <div>© {new Date().getFullYear()} Copyright Text</div>
    </StyledFooter>
  );
};
