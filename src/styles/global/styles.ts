import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 130%;
  }

  button, input {
    outline: none;
    transition: all 200ms;
    border: 1px solid transparent;
  }
  
  body {
    background-color: ${props => props.theme["background"]};
  }
`;
