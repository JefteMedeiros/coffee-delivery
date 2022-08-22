import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentOption, PaymentOptionsContainer } from "./styles";

export function PaymentOptions() {
  return (
    <PaymentOptionsContainer>
      <PaymentOption>
        <CreditCard size={16} />
        CARTÃO DE CRÉDITO
      </PaymentOption>
      <PaymentOption>
        <Bank size={16} />
        CARTÃO DE DÉBITO
      </PaymentOption>
      <PaymentOption>
        <Money size={16} />
        DINHEIRO
      </PaymentOption>
    </PaymentOptionsContainer>
  );
}
