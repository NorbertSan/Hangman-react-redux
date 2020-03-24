import React from "react";
import styled from "styled-components";
import theme from "theme/theme";
import { connect } from "react-redux";

const StyledWrapper = styled.div`
  height: 400px;
  width: 250px;
  position: relative;
  z-index: 9;
`;
const StyledStick = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  width: 65%;
  height: 15px;
  border-radius: 0 10px 10px 0;
  background: ${({ greishColor }) => theme.greishColor};
  &:after {
    content: "";
    position: absolute;
    left: 80%;
    top: 0;
    height: 50px;
    width: 15px;
    border-radius: 0 0 10px 10px;
    background: ${({ greishColor }) => theme.greishColor};
    transform: translatex(-50%);
  }
`;
const StyledHead = styled.div`
  width: 75px;
  z-index: 1;
  height: 100px;
  border-radius: 40% 40% 30% 30%;
  background: ${({ headColor }) => theme.headColor};
  position: absolute;
  top: 45px;
  left: 80%;
  transform: translatex(-50%);
  &:after {
    content: "";
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 20%;
    bottom: 0;
  }
`;
const StyledLeftEye = styled.div`
  position: absolute;
  top: 30%;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: black;
  left: 30%;
  transform: translate(-30%, -30%);
`;
const StyledRightEye = styled(StyledLeftEye)`
  transform: translate(-70%, -30%);
  left: 70%;
`;
const StyledMouth = styled.div`
  position: absolute;
  width: 20px;
  height: 10px;
  border-radius: 50% 50% 0 0;
  left: 50%;
  top: 70%;
  transform: translate(-50%, -70%);
  background: white;
`;

const StyledLeftEar = styled.div`
  position: absolute;
  left: -10px;
  top: 30%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ headColor }) => theme.headColor};
`;

const StyledRightEar = styled(StyledLeftEar)`
  left: 85%;
`;
const StyledNeck = styled.div`
  position: absolute;
  left: 50%;
  bottom: -13px;
  transform: translateX(-50%);
  width: 25px;
  height: 15px;
  background: ${({ headColor }) => theme.headColor};
  z-index: -1;
  &:after {
    content: "";
    border-radius:40%;
    border-bottom:2px solid ${({ greishColor }) => theme.greishColor};
    position: absolute;
    width: 100%;
    height: 10px;
    top: -5px;
    left: 0;
    /* background: ${({ greishColor }) => theme.greishColor}; */
  }
`;
const StyledTorso = styled.div`
  position: absolute;
  width: 50px;
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  top: 155px;
  z-index: 9;
  left: 63%;
  border-radius: 10px 10px 0 0;
`;
const StyledLeftSideShirt = styled.div`
  border-radius: 5px 0 0 0;
  background: ${({ leftSideShirt }) => theme.leftSideShirt};
`;
const StyledRightSideShirt = styled.div`
  border-radius: 0 5px 0 0;
  background: ${({ rightSideShirt }) => theme.rightSideShirt};
`;
const StyledLeftHand = styled.div`
  position: absolute;
  width: 20px;
  height: 70px;
  top: 0;
  left: 2px;
  transform: rotate(35deg);
  transform-origin: left top;
  background: ${({ leftSideShirt }) => theme.leftSideShirt};
  &:after {
    position: absolute;
    content: "";
    width: 15px;
    height: 10px;
    border-radius: 0 0 15px 15px;
    background: ${({ headColor }) => theme.headColor};
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
const StyledRightHand = styled.div`
  position: absolute;
  width: 20px;
  height: 70px;
  right: 2px;
  top: 0;
  transform: rotate(-35deg);
  transform-origin: right top;
  background: ${({ rightSideShirt }) => theme.rightSideShirt};
  &:after {
    position: absolute;
    content: "";
    width: 15px;
    height: 10px;
    border-radius: 0 0 15px 15px;
    background: ${({ headColor }) => theme.headColor};
    bottom: -10px;
    right: 50%;
    transform: translateX(50%);
  }
`;
const StyledShorts = styled.div`
  position: absolute;
  background: ${({ shortColor }) => theme.shortColor};
  left: 63%;
  width: 50px;
  height: 30px;
  top: 230px;
`;
const StyledLeftLeg = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  transform: rotate(15deg);
  transform-origin: left top;
  background: ${({ shortColor }) => theme.shortColor};
  width: 23px;
  height: 70px;
  &:after {
    position: absolute;
    content: "";
    width: 35px;
    height: 10px;
    background: ${({ headColor }) => theme.headColor};
    bottom: 0px;
    right: 0;
  }
`;

const StyledRightLeg = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  transform: rotate(-15deg);
  transform-origin: right top;
  background: ${({ shortColor }) => theme.shortColor};
  width: 23px;
  height: 70px;
  &:after {
    position: absolute;
    content: "";
    width: 35px;
    height: 10px;
    background: ${({ headColor }) => theme.headColor};
    bottom: 0px;
    left: 0;
  }
`;

const HangmanFigure = ({ missedLetters }) => {
  const hangman = [
    "head",
    "torso",
    "leftHand",
    "rightHand",
    "hip",
    "leftLeg",
    "rightLeg"
  ];
  const length = missedLetters.length;
  const presentHangman = [];
  for (let i = 0; i < length; i++) presentHangman.push(hangman[i]);
  return (
    <StyledWrapper>
      <StyledStick>
        {presentHangman.includes("head") && (
          <StyledHead>
            <StyledLeftEye />
            <StyledRightEye />
            <StyledLeftEar />
            <StyledRightEar />
            <StyledMouth />
            <StyledNeck />
          </StyledHead>
        )}
        {presentHangman.includes("torso") && (
          <StyledTorso>
            <StyledLeftSideShirt />
            <StyledRightSideShirt />
            {presentHangman.includes("leftHand") && <StyledLeftHand />}
            {presentHangman.includes("rightHand") && <StyledRightHand />}
          </StyledTorso>
        )}
        {presentHangman.includes("hip") && (
          <StyledShorts>
            {presentHangman.includes("leftLeg") && <StyledLeftLeg />}
            {presentHangman.includes("rightLeg") && <StyledRightLeg />}
          </StyledShorts>
        )}
      </StyledStick>
    </StyledWrapper>
  );
};

const mapStateToProps = state => ({
  missedLetters: state.hangman.missedLetters
});

export default connect(mapStateToProps)(HangmanFigure);
