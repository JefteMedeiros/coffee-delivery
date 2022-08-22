import { Link } from "react-router-dom";
import { FormTitle } from "../../styles/global/styles";
import { CheckoutInfo } from "../CheckoutInfo";
import { Coffee } from "../Coffee";

import {
  ConfirmOrderBox,
  ConfirmOrderButton,
  ConfirmOrderContainer,
  SelectedCoffees,
} from "./styles";

export function ConfirmOrder() {
  return (
    <ConfirmOrderContainer>
      <FormTitle>Cafés selecionados</FormTitle>
      <ConfirmOrderBox>
        <SelectedCoffees>
          <Coffee name="Expresso Tradicional" price={9.99} pic="images/expresso.png" />
        </SelectedCoffees>
        <CheckoutInfo />
        <Link to="/OrderSuccessful">
          <ConfirmOrderButton>CONFIRMAR PEDIDO</ConfirmOrderButton>
        </Link>
      </ConfirmOrderBox>
    </ConfirmOrderContainer>
  );
}
