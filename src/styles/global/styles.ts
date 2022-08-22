import styled, { createGlobalStyle } from "styled-components";

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
    background-color: ${(props) => props.theme["background"]};
  }
`;

export const FormTitle = styled.h1`
  margin-bottom: 16px;
  font-family: "Baloo 2", sans-serif;
  font-size: 1.125rem;
  font-weight: 1000;
`;

const Button = styled.button`
  display: flex;
  border-radius: 6px;
  line-height: 160%;

  color: ${(props) => props.theme["base-text"]};
  background-color: ${(props) => props.theme["base-button"]};
`;

export const YellowButton = styled(Button)`
  svg {
    color: ${(props) => props.theme["dark-yellow"]};
  }

  &:hover {
    background-color: ${(props) => props.theme["dark-yellow"]};
    cursor: pointer;
  }

  &:focus {
    background-color: ${(props) => props.theme["dark-yellow"]};
  }
`;

export const PurpleButton = styled(Button)`
  svg {
    color: ${(props) => props.theme["purple"]};
  }

  &:hover {
    background-color: ${(props) => props.theme["base-hover"]};
    color: ${(props) => props.theme["base-subtitle"]};
    cursor: pointer;
  }

  &:focus {
    background-color: ${(props) => props.theme["light-purple"]};
    border: 1px solid ${(props) => props.theme["dark-purple"]};
  }
`;

export const ItemCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme["base-button"]};

  svg {
    color: ${(props) => props.theme["purple"]};
    font-weight: bold;
  }

  button {
    display: flex;
    background: transparent;
    transition: all 200ms;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme["dark-purple"]};
    }
  }
`;
