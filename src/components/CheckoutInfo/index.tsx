import { CheckoutInfoContainer, CheckoutInfoRow, CheckoutTotal } from "./styles";

export function CheckoutInfo() {
  return (
    <CheckoutInfoContainer>
      <CheckoutInfoRow>
        <span>Total de itens</span>
        <span>R$ 49,99</span>
      </CheckoutInfoRow>
      <CheckoutInfoRow>
      <span>Entrega</span>
      <span>R$ 99,99</span>
      </CheckoutInfoRow>
      <CheckoutTotal>
        <span>Total</span>
        <span>R$123,23</span>
      </CheckoutTotal>
    </CheckoutInfoContainer>
  )
}