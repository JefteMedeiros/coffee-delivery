import styled from "styled-components";
import { theme } from "../../styles/theme/styles";

interface IconProps {
  iconVariant: "purple" | "yellow";
}

const iconVariations = {
  purple: theme["purple"],
  yellow: theme["dark-yellow"],
};

export const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
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
    ${(props) => {
      return `color: ${iconVariations[props.iconVariant]}`;
    }}
  }
`;

export const LabelDescription = styled.p`
  color: ${(props) => props.theme["base-text"]};
  margin-left: 1.875rem;
  font-size: 0.875rem;
`;

export const PaymentSelection = styled(FormBox)`
  margin-top: 0.75rem;
`;
