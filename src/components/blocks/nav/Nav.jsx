import {
  StyledList,
  StyledNav,
  StyledItem,
} from './styles';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <StyledNav>
      <StyledList>
        <StyledItem>
          <NavLink to="/profile">Profile</NavLink>
        </StyledItem>
        <StyledItem>
          <NavLink to="/messages">Messages</NavLink>
        </StyledItem>
        <StyledItem>
          <NavLink to="/users">Users</NavLink>
        </StyledItem>
        <StyledItem>
          <NavLink to="/news">News</NavLink>
        </StyledItem>
        <StyledItem>
          <NavLink to="/music">Music</NavLink>
        </StyledItem>
        <StyledItem>
          <NavLink to="/settings">Settings</NavLink>
        </StyledItem>
      </StyledList>
    </StyledNav>
  );
};
