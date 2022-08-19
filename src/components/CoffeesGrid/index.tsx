import { CoffeeCard } from "../CoffeeCard";
import { CoffeeContainer } from "./styles";
import { coffees } from "../../mock/coffees.json";

export function CoffeesGrid() {
  return (
    <CoffeeContainer>
      {coffees.map((coffee) => {
        return (
          <CoffeeCard
            price={coffee.price}
            name={coffee.name}
            pic={coffee.pic}
            description={coffee.description}
            category={coffee.category}
          />
        );
      })}
    </CoffeeContainer>
  );
}
