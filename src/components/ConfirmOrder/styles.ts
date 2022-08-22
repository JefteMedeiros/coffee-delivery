import styled from 'styled-components';
import { YellowButton } from '../../styles/global/styles';

export const ConfirmOrderContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 28rem;
`;

export const ConfirmOrderBox = styled.div`
  background-color: ${props => props.theme["base-card"]};
  border-radius: 6px;
  border-top-right-radius: 44px;
  padding: 2.5rem;
  border-bottom-left-radius: 44px;
`;

export const SelectedCoffees = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ConfirmOrderButton = styled(YellowButton)`
  background-color: ${props => props.theme["yellow"]};
  color: ${props => props.theme["white"]};
  font-size: 0.875rem;
  width: 100%;
  padding: 12px;
  justify-content: center;
  font-weight: bold;
`;