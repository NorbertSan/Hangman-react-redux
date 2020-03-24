import React from "react";
import styled, { keyframes } from "styled-components";
import theme from "theme/theme";

const bounce1 = keyframes`
   0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
const bounce2 = keyframes`
      0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(40px, 0);
  }
`;
const bounce3 = keyframes`
   0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const StyledCircle = styled.div`
  display: inline-block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 15%;
  width: 100px;
  height: 100px;
  div {
    background: ${({ blueishColor }) => theme.blueishColor};
    position: absolute;
    top: 33px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 10px;
    animation: ${bounce1} 0.6s infinite;
  }
  div:nth-child(2) {
    left: 10px;
    animation: ${bounce2} 0.6s infinite;
  }
  div:nth-child(3) {
    left: 50px;
    animation: ${bounce2} 0.6s infinite;
  }
  div:nth-child(4) {
    left: 70px;
    animation: ${bounce3} 0.6s infinite;
  }
`;

const Loader = () => (
  <StyledCircle>
    <div />
    <div />
    <div />
    <div />
  </StyledCircle>
);

export default Loader;
