import styled from 'styled-components';

export const StyledLogin = styled.div`
  display: flex;
  align-items: center;

  & h2 {
    margin-right: 10px;
  }

  & img {
    border-radius: 50%;
    margin-right: 10px;
  }

  & button {
    background-color: #2f7281;
    padding: 5px 10px;
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
    border: none;
    border-radius: 5px;

    &:hover {
      border-radius: 0;
    }
  }

  & a {
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;
    text-decoration: none;
    background-color: #3577ef;
    width: 100%;
    padding: 5px 10px;
    border-radius: 5px;

    &:hover {
      border-radius: 0;
    }
  }
`;
