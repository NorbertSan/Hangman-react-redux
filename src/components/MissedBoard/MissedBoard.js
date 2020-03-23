import React from "react";
import theme from "theme/theme";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import MissedLetter from "components/MissedLetter/MissedLetter";

const StyledWrapper = styled.div``;

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

const MissedBoard = ({ children, missedLetters }) => (
  <StyledWrapper>
    <StyledInfo>you missed :</StyledInfo>
    <StyledBoard>
      {missedLetters.map((letter, index) => (
        <MissedLetter key={`Missed ${index}.${letter}`}>{letter}</MissedLetter>
      ))}
    </StyledBoard>
  </StyledWrapper>
);

MissedBoard.propTypes = {
  missedLetters: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  missedLetters: state.hangman.missedLetters
});

export default connect(mapStateToProps)(MissedBoard);
