import { ShoppingCart } from "phosphor-react";
import { IconTypes } from "../../@types/features";
import { Container, FeatureIcon } from "../../styles/global/styles";

interface FeatureProps {
  feature: string;
  color: IconTypes;
}

export function FeatureCart(props: FeatureProps) {
  return (
    <Container>
      <FeatureIcon color={props.color}>
        <ShoppingCart size={16} weight="fill" />
      </FeatureIcon>
      {props.feature}
    </Container>
  )
}
