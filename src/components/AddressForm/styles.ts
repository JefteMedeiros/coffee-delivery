import styled from "styled-components";
import { theme } from "../../styles/theme/styles";

interface IconProps {
  iconVariant: "purple" | "yellow"
}

const iconVariations = {
  purple: theme["purple"],
  yellow: theme["dark-yellow"],
}

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 40rem;
`;

export const FinishOrder = styled.h1`
  margin-bottom: 16px;
  font-family: "Baloo 2", sans-serif;
  font-size: 1.125rem;
  font-weight: 1000;
`;

export const FormBox = styled.div`
  background-color: ${(props) => props.theme["base-card"]};
  padding: 2.5rem;
  border-radius: 6px;
`;

export const Form = styled.form`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  input {
    width: 100%;
    padding: 0.75rem;
    border-radius: 4px;
    color: ${(props) => props.theme["base-label"]};
    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-button"]};

    &:focus {
      color: ${(props) => props.theme["base-text"]};
      border: 1px solid ${(props) => props.theme["dark-yellow"]};
    }
  }
`;

export const Label = styled.label`
  margin-bottom: 1rem;
`;

export const LabelTitle = styled.h1<IconProps>`
  display: flex;
  line-height: 160%;
  gap: 0.5rem;

  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 1rem;
  font-weight: 100;

  svg {
    ${props => {
      return (
        `color: ${iconVariations[props.iconVariant]}`
      )
    }}
  }
`;

export const LabelDescription = styled.p`
  color: ${(props) => props.theme["base-text"]};
  margin-left: 1.875rem;
  font-size: 0.875rem;
`;

const FormGrid = styled.div`
  display: grid;
  gap: 0.75rem;
`;

export const ZipCode = styled.div`
  width: 12.5rem;
`;

export const Street = styled.div`
  width: 35rem;
`;

export const Number = styled(FormGrid)`
  grid-template-columns: 12.5rem 21.75rem;
`;

export const City = styled(FormGrid)`
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
`;

export const PaymentSelection = styled(FormBox)`
  margin-top: 0.75rem;
`;

export const PaymentOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.8125rem;
  margin-top: 2rem;
  
  button {
    flex: 1;
  }
`;

export const PaymentOption = styled.button`
  display: flex;
  gap: 0.75rem;
  padding: 1rem;
  padding-bottom: 0.8125rem;
  border-radius: 6px;
  line-height: 160%;

  font-size: 0.75rem;
  color: ${props => props.theme["base-text"]};
  background-color: ${props => props.theme["base-button"]};

  svg {
    color: ${props => props.theme["purple"]};
  }

  &:hover {
    background-color: ${props => props.theme["base-hover"]};
    color: ${props => props.theme["base-subtitle"]};
    cursor: pointer;
  }

  &:focus {
    background-color: ${props => props.theme["light-purple"]};
    border: 1px solid ${props => props.theme["dark-purple"]};
  }
`;
