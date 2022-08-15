import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 2.0625rem 10rem;
`;

export const ButtonContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const LocationSelect = styled.select`

`;

export const CartButton = styled.button`
  background-color: ${props => props.theme['light-yellow']};

  svg {
    color: ${props => props.theme['dark-yellow']}
  }
`;
