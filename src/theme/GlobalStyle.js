import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
    *,*::after,*::before{
        box-sizing:border-box;
    }
    html{
        font-family: 'Montserrat', sans-serif;
        font-size:62.5%;
    }
    body{
        font-size:1.6rem;
        margin:0;
        min-height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        background: ${({ backgroundColorSecondary }) =>
          theme.backgroundColorSecondary};
    }
`;

export default GlobalStyle;
