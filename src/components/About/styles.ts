import styled from 'styled-components';
import { theme } from '../../styles/theme/styles';

const iconVariations = {
  yellow: theme["yellow"],
  darkYellow: theme["dark-yellow"],
  gray: theme["base-text"],
  purple: theme["purple"],
}

export interface IconTypes {
  iconColor: "yellow" | "darkYellow" | "gray" | "purple"
};

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 3.5rem;
  position: relative;
  background-image: url("Background.png");
  padding: 5.75rem 0;
`;

export const DescriptionContainer = styled.section`
  display: flex;
  max-width: 70rem;
  flex-direction: row;
`;

export const AboutTitle = styled.h1`
  font-family: "Baloo 2", sanas-serif;
  font-weight: 1000;
  display: block;
  color: ${props => props.theme["base-title"]};
  font-size: 3rem;
`;

export const AboutDescription = styled.p`
  display: block;
  color: ${props => props.theme["base-subtitle"]};
  margin-top: 1rem;
  font-size: 1.25rem;
`;

export const FeaturesContainer = styled.div`
  display: grid;
  margin-top: 4.125rem;
  grid-template-columns: 14.4375rem 18.375rem;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
`;

export const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: ${props => props.theme["base-text"]};
`;

export const FeatureIcon = styled.span<IconTypes>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => `background-color: ${iconVariations[props.iconColor]}`};
  color: ${props => props.theme["white"]};
  border-radius: 9999px;
  padding: 0.5rem;
`

export const ImageContainer = styled.div``;
