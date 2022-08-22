import { Clock } from "phosphor-react";
import { InfoLogoVariations } from "../../@types/orderinfo";
import {
  HighlightedText,
  InfoLogo,
  OrderInfoContainer,
  OrderInfoText,
} from "../../styles/global/styles";

interface IProps {
  color: InfoLogoVariations;
}

export function OrderDeliveryTime(props: IProps) {
  return (
    <OrderInfoContainer>
      <InfoLogo color={props.color}>
        <Clock weight="fill" size={16} />
      </InfoLogo>
      <OrderInfoText>
        <span>Previsão de entrega</span>
        <HighlightedText>20 min - 30 min</HighlightedText>
      </OrderInfoText>
    </OrderInfoContainer>
  );
}
