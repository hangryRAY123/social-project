import styled from 'styled-components';

export const StyledLogin = styled.section`
  background-color: rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;

  & h2 {
    margin-top: 10px;
    margin-bottom: 20px;
    text-transform: uppercase;
  }
`;

export const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  border: 1px solid #000000;
  border-radius: 5px;
  padding: 10px;

  & b {
    font-size: 15px;
    line-height: 15px;
  }
`;
