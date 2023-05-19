import styled from 'styled-components';

export const StyledNav = styled.nav`
  padding: 35px 25px;
  border-radius: 10px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style-type: none;
  margin-bottom: 50px;
`;

export const StyledItem = styled.li`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  & a {
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
    text-decoration: none;
    width: 100%;
    padding: 5px 10px;
    border-radius: 5px;
  }

  & a.active {
    background-color: rgba(200, 200, 200, 1);
    pointer-events: none;
    color: #000000;
  }
`;
