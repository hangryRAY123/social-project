import styled from 'styled-components';

export const StyledDialogs = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-right: 2px solid rgba(204, 204, 204, 1);

  & a {
    color: #000000;
  }

  & a.active {
    background-color: rgba(80, 80, 80, 1);
    color: #ffffff;
  }
`;
