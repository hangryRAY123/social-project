import styled from 'styled-components';

export const StyledFriends = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h2 {
    font-family: 'Lato', 'Tahoma', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: rgba(145, 145, 145, 1);
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  & a {
    font-size: 15px;
    line-height: 15px;
  }

  & a.active {
    background-color: rgba(200, 200, 200, 1);
    color: #000000;
  }
`;
