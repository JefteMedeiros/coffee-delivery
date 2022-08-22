import styled from 'styled-components';

const FormGrid = styled.div`
  display: grid;
  gap: 0.75rem;
`;

export const ZipCode = styled.div`
  width: 12.5rem;
`;

export const Street = styled.div`
  width: 35rem;
`;

export const Number = styled(FormGrid)`
  grid-template-columns: 12.5rem 21.75rem;
`;

export const City = styled(FormGrid)`
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
`;
