import { City, Number, Street, ZipCode } from "./styles";

export function FormInputs() {
  return (
    <>
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
    </>
  );
}
