import React from "react";
import theme from "theme/theme";
import styled from "styled-components";

const StyledMissedLetter = styled.div`
  font-weight: 700;
  font-size: 3rem;
  padding: 5px;
  text-transform: uppercase;
  color: ${({ blueishColor }) => theme.blueishColor};
  @media screen and (max-width: ${({ mediaQueries }) =>
      theme.mediaQueries.smartphoneMedium}) {
    font-size: 2rem;
  }
`;

const MissedLetter = ({ children }) => (
  <StyledMissedLetter>{children}</StyledMissedLetter>
);
export default MissedLetter;
