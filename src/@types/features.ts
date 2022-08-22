import { theme } from "../styles/theme/styles";

export interface IconProps {
  color: IconTypes
}

export const iconVariations = {
  yellow: theme["yellow"],
  darkYellow: theme["dark-yellow"],
  gray: theme["base-text"],
  purple: theme["purple"],
};

export type IconTypes = "yellow" | "darkYellow" | "gray" | "purple";