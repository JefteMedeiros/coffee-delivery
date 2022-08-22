import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { FormTitle } from "../../styles/global/styles";

import { FormInputs } from "../FormInputs";
import { PaymentOptions } from "../PaymentOptions";
import {
  Form,
  FormBox,
  FormContainer,
  Label,
  LabelDescription,
  LabelTitle,
  PaymentSelection,
} from "./styles";

export function AddressForm() {
  return (
    <FormContainer>
      <FormTitle>Complete seu pedido</FormTitle>
      <FormBox>
        <Form>
          <Label>
            <LabelTitle iconVariant="yellow">
              <MapPinLine size={22} />
              Endereço de entrega
            </LabelTitle>
            <LabelDescription>
              Informe o endereço onde deseja receber seu pedido
            </LabelDescription>
          </Label>
          <FormInputs />
        </Form>
      </FormBox>
      <PaymentSelection>
        <Label>
          <LabelTitle iconVariant="purple">
            <CurrencyDollar size={22} />
            Pagamento
          </LabelTitle>
          <LabelDescription>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </LabelDescription>
        </Label>
        <PaymentOptions />
      </PaymentSelection>
    </FormContainer>
  );
}
