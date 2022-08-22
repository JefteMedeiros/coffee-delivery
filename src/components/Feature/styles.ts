import styled from 'styled-components';
import { theme } from '../../styles/theme/styles';

const iconVariations = {
  yellow: theme["yellow"],
  darkYellow: theme["dark-yellow"],
  gray: theme["base-text"],
  purple: theme["purple"],
};

export interface IconTypes {
  iconColor: "yellow" | "darkYellow" | "gray" | "purple";
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  color: ${(props) => props.theme["base-text"]};
`;

export const FeatureIcon = styled.span<IconTypes>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => `background-color: ${iconVariations[props.iconColor]}`};
  color: ${(props) => props.theme["white"]};
  border-radius: 9999px;
  padding: 0.5rem;
`;
