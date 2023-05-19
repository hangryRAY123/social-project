import { StyledLogo, StyledImg } from './styles';
import LogoImg from '../../../img/logo.png';

export const Logo = () => {
  return (
    <StyledLogo>
      <StyledImg
        src={LogoImg}
        width="50"
        height="50"
        alt="logo"
      />
    </StyledLogo>
  );
};
