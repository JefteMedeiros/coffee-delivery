import { AddressForm } from "../AddressForm";
import { ConfirmOrder } from "../ConfirmOrder";
import { CheckoutContainer } from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <AddressForm />
      <ConfirmOrder />
    </CheckoutContainer>
  )
}