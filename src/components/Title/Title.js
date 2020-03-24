import React from "react";
import styled from "styled-components";
import theme from "theme/theme";

const StyledInfo = styled.h3`
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ greishColor }) => theme.greishColor};
`;

export default StyledInfo;
