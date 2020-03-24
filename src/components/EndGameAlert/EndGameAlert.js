import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { initState } from "actions/initStateAction";
import Title from "components/Title/Title";
import theme from "theme/theme";
import { fetchWord } from "actions/fetchWordAction";
import Button from "components/Button/Button";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  min-height: 350px;
  z-index: 1;
  border-radius: 10px;
  background: ${({ whiteColor }) => theme.whiteColor};
  padding: 30px;
  box-shadow: 0px 0px 2px ${({ whiteColor }) => theme.whiteColor};
  @media screen and (max-width: ${({ mediaQueries }) =>
      theme.mediaQueries.smartphone}) {
    width: 400px;
  }
`;
const StyledTitle = styled(Title)`
  font-size: 3.2rem;
  margin-bottom: 0;
  @media screen and (max-width: ${({ mediaQueries }) =>
      theme.mediaQueries.smartphone}) {
    font-size: 2.2rem;
  }
`;
const StyledParagraph = styled.p`
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const EndGameAlert = ({ word, alert, initState, fetchWord }) => (
  <StyledWrapper>
    <StyledTitle>{alert}</StyledTitle>
    <StyledParagraph>
      Word: <span>{word}</span>
    </StyledParagraph>
    <Button
      onClick={() => {
        initState();
        fetchWord();
      }}
    >
      Play again
    </Button>
  </StyledWrapper>
);

const mapStateToProps = state => ({
  word: state.hangman.word
});

export default connect(mapStateToProps, { initState, fetchWord })(EndGameAlert);
