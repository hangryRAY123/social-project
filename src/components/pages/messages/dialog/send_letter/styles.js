import styled from 'styled-components';

export const StyledLetter = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  & textarea {
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: rgba(141, 141, 141, 1);
    border: none;
    padding: 0;
    border-radius: 5px;
    resize: none;
    padding: 10px;
    margin-bottom: 20px;
    background-color: #ffffff;
    box-sizing: border-box;
    width: 100%;
  }

  & textarea::placeholder {
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: rgba(141, 141, 141, 1);
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

    &:hover {
      opacity: 0.5;
      border-radius: 0;
    }

    &:disabled {
      opacity: 0.2;
    }
  }
`;
