import React from "react";
import GlobalStyle from "theme/GlobalStyle";
import { Provider, connect } from "react-redux";
import store from "store";
import styled from "styled-components";
import theme from "theme/theme";
import PropTypes from "prop-types";
// import WordToGuess from "components/WordToGuess/WordToGuess";
import WordBoard from "components/WordBoard/WordBoard";
import HangmanFigure from "components/HangmanFigure/HangmanFigure";
import Triangle from "components/Triangle/Triangle";
import MissedBoard from "components/MissedBoard/MissedBoard";
import { addLetter } from "actions/letterActions";
import { fetchWord } from "actions/fetchWordAction";

const StyledWrapper = styled.div`
  width: 70vw;
  height: 70vh;
  background: ${({ backgroundColor }) => theme.backgroundColor};
  position: relative;
  display: grid;
  grid-template-rows: 70% 30%;
  /* overflow: hidden; */
`;
const StyledInnerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

class MainView extends React.Component {
  componentDidMount() {
    this.addListeners();
    this.props.fetchWord();
  }

  addListeners = () => {
    document.body.addEventListener("keyup", e => this.props.addLetter(e));
  };

  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <StyledWrapper>
          <Triangle />
          <StyledInnerWrapper>
            <HangmanFigure />
            <MissedBoard />
          </StyledInnerWrapper>
          <WordBoard />
        </StyledWrapper>
      </Provider>
    );
  }
}

MainView.propTypes = {
  missedLetters: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  missedLetters: state.hangman.missedLetters
});

export default connect(mapStateToProps, { addLetter, fetchWord })(MainView);
