import styled from 'styled-components';

export const CheckoutInfoContainer = styled.div`
  display: flex;
  margin: 1.5rem 0;
  flex-direction: column;
  gap: 12px;
`;

export const CheckoutInfoRow = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 0.875rem;
  color: ${props => props.theme["base-text"]};
`;

export const CheckoutTotal = styled(CheckoutInfoRow)`
  font-size: 1.25rem;
  color: ${props => props.theme["base-subtitle"]};
  font-weight: bold;
`;
