import React from "react";
import GlobalStyle from "theme/GlobalStyle";
import { Provider } from "react-redux";
import store from "store";
import styled from "styled-components";
import theme from "theme/theme";
import WordToGuess from "components/WordToGuess/WordToGuess";
import HangmanFigure from "components/HangmanFigure/HangmanFigure";

const StyledWrapper = styled.div`
  width: 70vw;
  height: 70vh;
  background: ${({ backgroundColor }) => theme.backgroundColor};
`;

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <StyledWrapper>
          <HangmanFigure />
          {/* <WordToGuess /> */}
        </StyledWrapper>
      </Provider>
    );
  }
}

export default App;
