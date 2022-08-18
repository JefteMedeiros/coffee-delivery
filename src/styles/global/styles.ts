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
    display: flex;
    margin: 0 10rem;
    flex-direction: column;
  }
`;
