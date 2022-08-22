import { theme } from "../styles/theme/styles"

export type InfoLogoVariations = "purple" | "yellow" | "dark-yellow"

export interface InfoLogoProps {
  color: InfoLogoVariations
}

export const infoLogoColors = {
  "purple": theme["purple"],
  "yellow": theme["yellow"],
  "dark-yellow": theme["dark-yellow"]
}