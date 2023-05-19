import styled from 'styled-components';

export const StyledImg = styled.img`
  margin: 0 auto;
  margin-right: ${(props) => {
    let marginRight = props.$mR;
    if (props.$mR === undefined) {
      marginRight = 'auto';
    }
    return marginRight;
  }};
  width: ${(props) => {
    let width;
    if (props.$width) {
      width = '30px';
    }
    return width;
  }};
  height: ${(props) => {
    let height;
    if (props.$height) {
      height = '30px';
    }
    return height;
  }};
`;
