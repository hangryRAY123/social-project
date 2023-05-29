import styled from 'styled-components';

export const StyledProfile = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 200px auto;
  column-gap: 20px;
  padding: 20px;
  box-sizing: border-box;

  & > div {
    margin-bottom: 10px;
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

  & > button {
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

export const StyledAvatar = styled.article`
  grid-column: 1;
  grid-row: 1/4;

  & > img {
    border-radius: 50%;
    margin-bottom: 20px;
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

  & > img {
    display: block;
    position: absolute;
    top: 20px;
    left: 200px;
    transition: 0.3s ease;
    cursor: pointer;
  }

  & > img:hover {
    opacity: 0.5;
  }
`;

export const StyledUpload = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;

  & label {
    position: relative;
    display: inline-block;
  }

  & input[type='file'] {
    position: absolute;
    z-index: -1;
    opacity: 0;
    display: block;
    width: 0;
    height: 0;
  }

  & input[type='file'] + img {
    cursor: pointer;
  }

  & img {
    transition: 0.3s ease;
  }

  & img:hover {
    opacity: 0.4;
  }
`;

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 50px;

  & input[type='checkbox'] {
    width: 27px;
    height: 27px;
  }

  & label {
    margin-bottom: 10px;
  }

  & input {
    font-family: Lato, Tahoma, sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    cursor: pointer;
    background-color: rgb(250, 250, 250);
    color: rgb(141, 141, 141);
    width: 100%;
    border-radius: 5px;
    padding: 5px;
    transition: all 0.3s ease 0s;
    margin: 0;
    border: none;
    box-sizing: border-box;
  }
`;

export const StyledSaveButton = styled.div`
  display: flex;
  align-items: center;

  & button {
    background-color: rgb(47, 114, 129);
    padding: 7px 40px;
    font-family: Lato, Tahoma, sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    color: rgb(255, 255, 255);
    border: none;
    border-radius: 5px;
  }

  & img {
    margin-left: 5px;
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
