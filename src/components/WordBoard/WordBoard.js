import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import Ceil from "components/Ceil/Ceil";

const StyledWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  position: relative;
  align-items: center;
  z-index: 999;
  height: 100%;
  justify-content: flex-start;
  width: 90%;
  margin: auto;
`;

const WordBoard = ({ word, hittedLetters }) => {
  let wordArr;
  if (word) wordArr = word.split("");
  return (
    <>
      {wordArr && (
        <StyledWrapper length={wordArr.length}>
          {wordArr.map((letter, index) => (
            <Ceil
              hit={hittedLetters.includes(letter)}
              key={`${index}:${letter}`}
            >
              {letter}
            </Ceil>
          ))}
        </StyledWrapper>
      )}
    </>
  );
};

WordBoard.propTypes = {
  word: PropTypes.string
};

const mapStateToProps = state => ({
  word: state.hangman.word,
  hittedLetters: state.hangman.hitLetters
});

export default connect(mapStateToProps)(WordBoard);
