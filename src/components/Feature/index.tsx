import { Coffee } from "phosphor-react";
import { Container, FeatureIcon } from "./styles";

interface FeatureProps {
  feature: string;
}

export function Feature(props: FeatureProps) {
  return (
    <Container>
      <FeatureIcon iconColor="purple">
        <Coffee weight="fill" />
      </FeatureIcon>
      {props.feature}
    </Container>
  )
}
