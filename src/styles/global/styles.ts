import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 130%;
  }
  
  body {
    background-color: ${props => props.theme["background"]};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
