import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import Title from "components/Title/Title";
import MissedLetter from "components/MissedLetter/MissedLetter";

const StyledWrapper = styled.div``;

const StyledBoard = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
`;

const MissedBoard = ({ children, missedLetters }) => (
  <StyledWrapper>
    <Title>you missed :</Title>
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
