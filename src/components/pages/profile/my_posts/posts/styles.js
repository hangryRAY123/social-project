import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const StyledItem = styled.li`
  position: relative;
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

  & span {
    position: absolute;
    bottom: -5px;
    right: -5px;
    display: flex;
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    padding: 3px;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.14);
  }

  & span > img {
    margin-right: 3px;
  }
`;
