import React from "react";
import theme from "theme/theme";
import styled, { css } from "styled-components";

const StyledCeil = styled.div`
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
  height: 80px;
  margin: 3px;
  transition: all 0.2s ease-in-out;
  width: 80px;
  background: ${({ inactiveCeil }) => theme.inactiveCeil};
  color: ${({ activeCeil }) => theme.activeCeil};
  text-transform: uppercase;
  ${({ invert }) =>
    invert &&
    css`
      background: ${({ activeCeil }) => theme.activeCeil};
      color: ${({ inactiveCeil }) => theme.inactiveCeil};
    `}
  ${({ hit }) =>
    hit &&
    css`
      font-size: 3rem;
    `};
`;

const Ceil = ({ children, hit, invert }) => {
  return (
    <StyledCeil invert={invert} hit={hit}>
      {children}
    </StyledCeil>
  );
};

export default Ceil;
