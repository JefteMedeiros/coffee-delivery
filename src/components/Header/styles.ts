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
  gap: 0.75rem;
`;

export const LocationSelect = styled.button`
  display: flex;  
  font-size: 16px;
  align-items: center;
  background-color: ${props => props.theme["light-purple"]};
  color: ${props => props.theme["dark-purple"]};
  padding: 8px;
  border: none;
  outline: none;
  border-radius: 6px;
  font-family: 'Roboto', sans-serif;

  svg {
    color: ${props => props.theme["purple"]};
    margin-right: 0.25rem;
  }
`;

export const CartButton = styled.button`
  background-color: ${props => props.theme['light-yellow']};
  padding: 0.5rem;
  border-radius: 6px;
  border: none;

  svg {
    color: ${props => props.theme['dark-yellow']}
  }
`;
