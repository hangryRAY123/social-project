import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & label {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  & input {
    padding: 5px;
    border: none;
    border-radius: 5px;
    outline: none;
  }

  & small {
    display: inline-block;
  }

  & button {
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
    border: none;
    width: 100px;

    &:hover {
      border-radius: 0;
    }
  }
`;

export const StyledError = styled.span`
  display: flex;
  align-items: center;
  color: #ff0000;
  text-transform: uppercase;
  margin-bottom: 10px;

  & img {
    margin-right: 5px;
  }
`;

export const StyledCaptcha = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;

  & > img {
    margin-bottom: 10px;
  }
`;
