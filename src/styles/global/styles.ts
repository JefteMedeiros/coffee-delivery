import styled, { createGlobalStyle } from "styled-components";
import { infoLogoColors, InfoLogoProps } from "../../@types/orderinfo";
import { IconProps, iconVariations } from "../../@types/features";

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

  a {
    text-decoration: none;
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

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: ${(props) => props.theme["base-text"]};
`;

export const FeatureIcon = styled.span<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => `background-color: ${iconVariations[props.color]}`};
  color: ${(props) => props.theme["white"]};
  border-radius: 9999px;
  padding: 0.5rem;
`;

export const OrderInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const InfoLogo = styled.span<InfoLogoProps>`
  display: flex;
  border-radius: 9999px;
  padding: 0.5rem;
  ${(props) => {
    return `background-color: ${infoLogoColors[props.color]}`;
  }};

  svg {
    color: ${(props) => props.theme["white"]};
  }
`;

export const OrderInfoText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HighlightedText = styled.h4`
  font-size: 1rem;
  color: ${(props) => props.theme["base-text"]};
  font-weight: bold;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme["base-subtitle"]};
  font-family: "Baloo 2", sans-serif;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;
