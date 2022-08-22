import styled from "styled-components";
import { ItemCount, PurpleButton } from "../../styles/global/styles";

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  img {
    max-width: 4rem;
  }

  border-bottom: 1px solid ${props => props.theme["base-button"]};
  padding-bottom: 1.5rem;
`;

export const SelectedCoffeeTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  color: ${(props) => props.theme["base-subtitle"]};

  h4 {
    font-weight: bold;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const SelectedCoffeeInteraction = styled.div`
  flex: 1;
`;

export const SelectedCoffeeButtons = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 0.5rem;
`;

export const AddOrRemoveCoffee = styled(ItemCount)`
  padding: 6.5px 8px;
`;

export const RemoveItem = styled(PurpleButton)`
  padding: 6.5px 8px;
  font-size: 0.75rem;
  gap: 0.25rem;
`;
