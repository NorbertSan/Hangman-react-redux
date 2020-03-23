import React from "react";
import GlobalStyle from "theme/GlobalStyle";
import { Provider } from "react-redux";
import store from "store";
import styled from "styled-components";
import theme from "theme/theme";
// import WordToGuess from "components/WordToGuess/WordToGuess";
import WordBoard from "components/WordBoard/WordBoard";
import HangmanFigure from "components/HangmanFigure/HangmanFigure";
import Triangle from "components/Triangle/Triangle";
import MissedBoard from "components/MissedBoard/MissedBoard";

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

class App extends React.Component {
  componentDidMount() {}

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

export default App;
