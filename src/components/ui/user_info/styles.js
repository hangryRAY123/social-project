import styled from 'styled-components';

export const StyledProfile = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  column-gap: 20px;
  padding: 20px;
  box-sizing: border-box;

  & > img {
    grid-column: 1;
    grid-row: 1/4;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  & > div {
    margin-bottom: 20px;
  }

  & h2 {
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    grid-column: 2;
    margin-right: 15px;
  }

  & b {
    grid-column: 2;
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 20px;
  }

  & button {
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: rgba(255, 255, 255, 1);
    background-color: #3577ef;
    border: none;
    padding: 0;
    border-radius: 5px;
    padding: 5px;
    width: 130px;
    align-self: flex-end;
    cursor: pointer;
    grid-column: 2;

    &:hover {
      opacity: 0.5;
      border-radius: 0;
    }

    &:disabled {
      opacity: 0.2;
    }
  }
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  grid-column: 2;
`;

export const StyledItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & small {
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 2px;
  }

  & a,
  span {
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-decoration: none;
    color: #000000;
  }
`;

export const StyledHeader = styled.div`
  display: flex;
  margin-bottom: 5px;
  align-items: center;
`;
