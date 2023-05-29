import styled from 'styled-components';

export const StyledStatus = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & img {
    position: absolute;
    top: -10px;
    right: -19px;
  }

  & span {
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    cursor: pointer;
    background-color: rgb(250, 250, 250);
    min-width: 250px;
    border-radius: 5px;
    padding: 5px;
    transition: 0.3s ease;
  }

  & span:hover {
    opacity: 0.5;
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

export const StyledStatusUser = styled.div`
  & span {
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 400;
    font-size: 19px;
    line-height: 19px;

    background-color: rgb(250, 250, 250);
    min-width: 250px;
    border-radius: 5px;
    padding: 5px;
  }
`;
