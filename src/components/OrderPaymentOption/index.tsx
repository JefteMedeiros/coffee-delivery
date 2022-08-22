import { CurrencyDollar, Money } from "phosphor-react";
import { InfoLogoVariations } from "../../@types/orderinfo";
import { HighlightedText, InfoLogo, OrderInfoContainer, OrderInfoText } from "../../styles/global/styles";

interface IProps {
  color: InfoLogoVariations;
  payment_method: string;
}

export function OrderPaymentOption(props: IProps) {
  return (
    <OrderInfoContainer>
      <InfoLogo color={props.color}>
        <CurrencyDollar weight="fill" size={16} />
      </InfoLogo>
      <OrderInfoText>
        <span>Pagamento na entrega</span>
        <HighlightedText>{props.payment_method}</HighlightedText>
      </OrderInfoText>
    </OrderInfoContainer>
  );
}
