import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  & img {
    border-radius: 50%;
    margin-right: 10px;
    transition: 0.3s ease;
  }

  & h3 {
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
  }

  & span {
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 700;
    font-size: 13px;
    line-height: 13px;
  }

  & div:first-of-type {
    margin-right: 20px;
    width: 250px;
  }

  & span {
    display: inline-block;
  }

  & a:hover img {
    border-radius: 0;
  }
`;

export const StyledBtnFollow = styled.button`
  font-family: 'Lato', 'Tahoma', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #000000;
  background-color: #ffffff;
  border: none;
  padding: 0;
  border-radius: 5px;
  padding: 10px;
  width: 130px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
    border-radius: 0;
  }

  &:disabled {
    opacity: 0.2;
    pointer-events: none;
  }
`;

export const StyledBtnUnfollow = styled.button`
  font-family: 'Lato', 'Tahoma', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  background-color: #3577ef;
  border: none;
  padding: 0;
  border-radius: 5px;
  padding: 10px;
  width: 130px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
    border-radius: 0;
  }

  &:disabled {
    opacity: 0.2;
    pointer-events: none;
  }
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  & button:first-of-type {
    margin-right: 10px;
  }

  & button:last-of-type {
    margin-left: 5px;
  }
`;

export const StyledBtnPage = styled.button`
  font-family: 'Lato', 'Tahoma', sans-serif;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  border: none;
  padding: 10px 5px;
  border-radius: 10px 5px;
  min-width: 40px;
  color: ${(props) => {
    let color = '#000000';
    if (props.$currentPage === props.$e) {
      color = '#ffffff';
    }
    return color;
  }};
  background-color: ${(props) => {
    let backgroundColor = '#ffffff';
    if (props.$currentPage === props.$e) {
      backgroundColor = '#3577ef';
    }
    return backgroundColor;
  }};
  pointer-events: ${(props) => {
    let pointerEvents = 'all';
    if (props.$currentPage === props.$e) {
      pointerEvents = 'none';
    }
    return pointerEvents;
  }};
  margin-right: 5px;

  &:hover {
    opacity: 0.5;
    border-radius: 0;
  }

  &:disabled {
    opacity: 0.2;
    pointer-events: none;
  }
`;

export const StyledBtnToggle = styled.button`
  font-family: 'Lato', 'Tahoma', sans-serif;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  border: none;
  background-color: #ffffff;
  border-radius: 10px 5px;

  &:hover {
    background-color: #3577ef;
    color: #ffffff;
    opacity: 1;
  }

  &:disabled {
    opacity: 0.2;
    pointer-events: none;
  }
`;
