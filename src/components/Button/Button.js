import React from "react";
import styled from "styled-components";
import theme from "theme/theme";

const Button = styled.button`
  padding: 12px 25px;
  border: none;
  background: transparent;
  border-radius: 30px;
  border: 3px solid ${({ greishColor }) => theme.greishColor};
  color: ${({ greishColor }) => theme.greishColor};
  font-weight: 800;
  font-size: 2rem;
  overflow: hidden;
  cursor: pointer;
`;

export default Button;
