import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
`;

export const StyledWarning = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  color: rgba(53, 119, 239, 1);
  width: 250px;
  bottom: 0;
  right: ${(props) => {
    let right = `${props.$right}px`;
    if (props.$right === undefined) {
      right = 'none';
    }
    return right;
  }};
  top: ${(props) => {
    let top = `${props.$top}px`;
    if (props.$top === undefined) {
      top = 'none';
    }
    return top;
  }};

  & img {
    margin-right: 5px;
  }
`;
