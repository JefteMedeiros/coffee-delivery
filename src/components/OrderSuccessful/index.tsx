import { OrderAddressInfo } from "../OrderAddressInfo";
import { OrderDeliveryTime } from "../OrderDeliveryTime";
import { OrderPaymentOption } from "../OrderPaymentOption";
import { BackgroundGradient, ConfirmedOrderSubtitle, ConfirmedOrderTitle, InfoContainer, OrderContainer } from "./styles";

export function OrderSuccessful() {
  return (
    <OrderContainer>
      <div>
        <ConfirmedOrderTitle>Uhu! Pedido confirmado</ConfirmedOrderTitle>
        <ConfirmedOrderSubtitle>Agora é só aguardar que logo o café chegará até você</ConfirmedOrderSubtitle>
        <BackgroundGradient>
          <InfoContainer>
            <OrderAddressInfo city_state="alírio" address="Rua 1 do lado da Rua 2" color="purple" />
            <OrderDeliveryTime color="yellow" />
            <OrderPaymentOption payment_method="Cartão de crédito" color="dark-yellow" />
          </InfoContainer>
        </BackgroundGradient>
      </div>
      <img src="Illustration.png" alt="" />
    </OrderContainer>
  );
}