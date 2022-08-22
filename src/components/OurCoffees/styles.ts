import styled from 'styled-components';

export const OurCoffeesContainer = styled.section`
  margin: auto;
  max-width: 70rem;
`;

export const Title = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-weight: 1000;
  padding: 0 1.875rem;
  margin-top: 1.5rem;
  color: ${props => props.theme["base-subtitle"]};
  font-size: 2rem;
`;
