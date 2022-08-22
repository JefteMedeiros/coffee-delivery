import styled from 'styled-components';
import { PurpleButton } from '../../styles/global/styles';

export const PaymentOptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.8125rem;
  margin-top: 2rem;

  button {
    flex: 1;
  }
`;

export const PaymentOption = styled(PurpleButton)`
  gap: 0.75rem;
  padding: 1rem;
  padding-bottom: 0.8125rem;
  font-size: 0.75rem;
`;
