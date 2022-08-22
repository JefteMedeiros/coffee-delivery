import { MapPin } from "phosphor-react";
import { InfoLogoVariations } from "../../@types/orderinfo";
import { HighlightedText, InfoLogo, OrderInfoContainer, OrderInfoText } from "../../styles/global/styles";

interface IProps {
  color: InfoLogoVariations;
  address: string;
  city_state: string;
}

export function OrderAddressInfo(props: IProps) {
  return (
    <OrderInfoContainer>
      <InfoLogo color={props.color}>
        <MapPin weight="fill" size={16} />
      </InfoLogo>
      <OrderInfoText>
        <span>Entrega em <HighlightedText>{props.address}</HighlightedText></span>
        <span>{props.city_state}</span>
      </OrderInfoText>
    </OrderInfoContainer>
  );
}
