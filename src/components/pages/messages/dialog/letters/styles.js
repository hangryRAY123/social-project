import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const StyledItem = styled.li`
  margin-bottom: 15px;
  display: grid;
  grid-template-columns: 32px auto;
  column-gap: 15px;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;

  & img {
    border-radius: 5px;
    grid-row: 1/3;
  }

  & h3 {
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    grid-column: 2;
  }

  & time {
    display: inline-flex;
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    grid-column: 2;
    margin-bottom: 10px;
  }

  & p {
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    grid-column: 2/-1;
  }
`;
