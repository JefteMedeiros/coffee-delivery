import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import {
  City,
  FinishOrder,
  Form,
  FormBox,
  FormContainer,
  Label,
  LabelDescription,
  LabelTitle,
  Number,
  PaymentOption,
  PaymentOptionsContainer,
  PaymentSelection,
  Street,
  ZipCode,
} from "./styles";

export function AddressForm() {
  return (
    <FormContainer>
      <FinishOrder>Complete seu pedido</FinishOrder>
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
          <ZipCode>
            <input type="text" placeholder="CEP" />
          </ZipCode>
          <Street>
            <input type="text" placeholder="Rua" />
          </Street>
          <Number>
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
          </Number>
          <City>
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </City>
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
      </PaymentSelection>
    </FormContainer>
  );
}
