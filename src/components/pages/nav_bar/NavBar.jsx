import { FriendsContainer } from './friends/FriendsContainer';
import { Nav } from '../../blocks/nav/Nav';
import { StyledNavBar } from './styles';

export const NavBar = () => {
  return (
    <StyledNavBar>
      <Nav />
      <FriendsContainer />
    </StyledNavBar>
  );
};
