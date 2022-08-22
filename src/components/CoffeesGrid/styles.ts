import styled from 'styled-components';

export const CoffeeContainer = styled.section`
  display: grid;
  margin: 3.375rem 0;
  justify-content: center;
  grid-template-columns: repeat(4, 256px);
  column-gap: 2rem;
  row-gap: 2.5rem;
  
  @media screen and (max-width: 1180px) {
    padding: 0 1.875rem;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  }
`;
