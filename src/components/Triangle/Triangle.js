import React from "react";
import styled from "styled-components";
import theme from "theme/theme";

const StyledTriangle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
  width: 300px;
  height: 250px;
  border-top: 250px solid transparent;
  border-left: 300px solid transparent;
  border-right: 300px solid ${({ blueishColor }) => theme.blueishColor};
`;

const Triangle = () => <StyledTriangle />;

export default Triangle;
