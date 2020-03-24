import React from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import theme from "theme/theme";
import PropTypes from "prop-types";
import EndGameAlert from "components/EndGameAlert/EndGameAlert";
import WordBoard from "components/WordBoard/WordBoard";
import HangmanFigure from "components/HangmanFigure/HangmanFigure";
import Triangle from "components/Triangle/Triangle";
import MissedBoard from "components/MissedBoard/MissedBoard";
import Loader from "components/Loader/Loader";
import { addLetter } from "actions/letterActions";
import { fetchWord } from "actions/fetchWordAction";
import { initState } from "actions/initStateAction";

const StyledWrapper = styled.div`
  width: 70vw;
  height: 70vh;
  background: ${({ backgroundColor }) => theme.backgroundColor};
  position: relative;
  display: grid;
  grid-template-rows: 70% 30%;
  box-shadow: 0px 0px 50px -5px black;
  z-index: -1;
  ${({ disable }) =>
    disable &&
    css`
      opacity: 0.2;
    `}
`;
const StyledInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

class MainView extends React.Component {
  initGame() {
    this.props.fetchWord();
    this.props.initState();
  }
  componentDidMount() {
    this.addListeners();
    this.initGame();
  }
  componentDidUpdate() {
    // if (!this.props.word) this.initGame();
  }

  addListeners = () => {
    document.body.addEventListener("keyup", e => this.props.addLetter(e));
  };

  render() {
    const { isGameLose, isGameWon, word } = this.props;
    return (
      <>
        {isGameWon && <EndGameAlert alert="Congrats, you won !" />}
        {isGameLose && <EndGameAlert alert="You lose, try again" />}
        <StyledWrapper disable={isGameWon || isGameLose}>
          <Triangle />
          <StyledInnerWrapper>
            <HangmanFigure />
            <MissedBoard />
          </StyledInnerWrapper>
          {word === "" && <Loader />}
          <WordBoard />
        </StyledWrapper>
      </>
    );
  }
}

MainView.propTypes = {
  isGameLose: PropTypes.bool.isRequired,
  isGameWon: PropTypes.bool.isRequired,
  addLetter: PropTypes.func.isRequired,
  fetchWord: PropTypes.func.isRequired,
  initState: PropTypes.func.isRequired,
  word: PropTypes.string
};

const mapStateToProps = state => ({
  isGameLose: state.hangman.isGameLose,
  isGameWon: state.hangman.isGameWon,
  word: state.hangman.word
});

export default connect(mapStateToProps, { addLetter, fetchWord, initState })(
  MainView
);
