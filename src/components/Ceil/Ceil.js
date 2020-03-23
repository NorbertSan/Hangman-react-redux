import React from "react";
import { connect } from "react-redux";
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
  ${({ hit }) =>
    hit &&
    css`
      font-size: 3rem;
    `};
`;

const Ceil = ({ children, hit }) => {
  return <StyledCeil hit={hit}>{children}</StyledCeil>;
};

const mapStateToProps = state => ({
  word: state.letters.word
});

export default Ceil;
