import { CoffeesGrid } from '../CoffeesGrid';
import { OurCoffeesContainer, Title } from './styles';

export function OurCoffees() {
  return (
    <OurCoffeesContainer>
      <Title>
        Nossos cafés
      </Title>
      <CoffeesGrid />
    </OurCoffeesContainer>
  );
}