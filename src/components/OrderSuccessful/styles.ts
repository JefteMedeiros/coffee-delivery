import styled from "styled-components";
import { Title } from "../../styles/global/styles";

export const OrderContainer = styled.div`
  display: flex;
  max-width: 70rem;
  margin: auto;
  padding-top: 5rem;
  align-items: flex-end;
  justify-content: space-between;
`;

export const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${props => props.theme["background"]};
  
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  padding: 2.5rem;
  `;

export const BackgroundGradient = styled.div`
  padding: 0.0625rem;
  max-width: 32.875rem;
  background-image: linear-gradient(to bottom right, ${props => props.theme["yellow"]} , ${props => props.theme["purple"]});
  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
`;

export const ConfirmedOrderTitle = styled(Title)`
  font-size: 2rem;
  margin-bottom: 0.25rem;
  color: ${props => props.theme["dark-yellow"]};
  font-weight: bold;
`;

export const ConfirmedOrderSubtitle = styled.p`
  color: ${props => props.theme["base-subtitle"]};
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
`;