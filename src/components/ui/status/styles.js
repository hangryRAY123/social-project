import styled from 'styled-components';

export const StyledStatus = styled.div`
  & span {
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 400;
    font-size: 19px;
    line-height: 19px;
    cursor: pointer;
    background-color: rgb(250, 250, 250);
    min-width: 250px;
    border-radius: 5px;
    padding: 5px;
  }

  & input {
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    border: none;
    outline: none;
    background-color: #3577ef;
    color: #ffffff;
    min-width: 250px;
    border-radius: 5px;
    padding: 5px;
  }
`;
