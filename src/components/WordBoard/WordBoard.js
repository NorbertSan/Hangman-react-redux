import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchWord } from "actions/letterActions";
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

class WordBoard extends React.Component {
  componentDidMount() {
    this.props.fetchWord();
  }

  render() {
    const word = this.props.word;
    let wordArr;
    if (word) wordArr = word.split("");
    return (
      <>
        {wordArr && (
          <StyledWrapper length={wordArr.length}>
            {wordArr.map((letter, index) => (
              <Ceil key={`${index}:${letter}`}>{letter}</Ceil>
            ))}
          </StyledWrapper>
        )}
      </>
    );
  }
}

WordBoard.propTypes = {
  word: PropTypes.string
};

const mapStateToProps = state => ({
  word: state.letters.word
});

export default connect(mapStateToProps, { fetchWord })(WordBoard);
