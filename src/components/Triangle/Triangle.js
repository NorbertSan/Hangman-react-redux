import React from "react";
import styled from "styled-components";
import theme from "theme/theme";

const StyledTriangle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
  border-top: 220px solid transparent;
  border-left: 300px solid transparent;
  transform-origin: right bottom;
  border-right: 300px solid ${({ blueishColor }) => theme.blueishColor};
  @media screen and (max-width: ${({ mediaQueries }) =>
      theme.mediaQueries.smartphone}) {
    transform: scale(0.7);
  }
`;

const Triangle = () => <StyledTriangle />;

export default Triangle;
