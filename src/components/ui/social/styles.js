import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-self: center;
  grid-column: 1;
`;

export const StyledItem = styled.li`
  margin-right: 15px;

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: rgba(232, 232, 232, 1);
    border-radius: 50%;
  }

  & img {
    border-radius: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;
