import React from "react";
import theme from "theme/theme";
import styled from "styled-components";
import MissedLetter from "components/MissedLetter/MissedLetter";

const StyledWrapper = styled.div``;
const missedLetterArr = ["a", "b", "c", "d", "e", "f", "h", "y"];

const StyledInfo = styled.h3`
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ greishColor }) => theme.greishColor};
`;

const StyledBoard = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
`;

const MissedBoard = ({ children }) => (
  <StyledWrapper>
    <StyledInfo>you missed :</StyledInfo>
    <StyledBoard>
      {missedLetterArr.map((letter, index) => (
        <MissedLetter key={`Missed ${index}.${letter}`}>{letter}</MissedLetter>
      ))}
    </StyledBoard>
  </StyledWrapper>
);

export default MissedBoard;
