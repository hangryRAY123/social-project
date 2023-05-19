import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const StyledItem = styled.li`
  margin-bottom: 10px;

  & a {
    display: flex;
    align-items: center;
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 17px;
    text-decoration: none;
    color: #ffffff;
    padding: 5px 10px;
    border-radius: 5px;
  }

  & a.active {
    background-color: rgba(130, 97, 102, 1);
    pointer-events: none;
  }

  & img {
    border-radius: 5px;
    margin-right: 10px;
  }
`;
