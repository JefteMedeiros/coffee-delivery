import { Minus, Plus, Trash } from "phosphor-react";
import {
  AddOrRemoveCoffee,
  RemoveItem,
  SelectedCoffeeButtons,
  SelectedCoffeeContainer,
  SelectedCoffeeInteraction,
  SelectedCoffeeTitle,
} from "./styles";

interface CoffeeProps {
  name: string;
  price: number;
  pic: string;
}

export function Coffee(props: CoffeeProps) {
  return (
    <SelectedCoffeeContainer>
      <img src={props.pic} alt="coffee" />
      <SelectedCoffeeInteraction>
        <SelectedCoffeeTitle>
          <span>{props.name}</span>
          <h4>R${props.price.toString().replace(".",",")}</h4>
        </SelectedCoffeeTitle>
        <SelectedCoffeeButtons>
          <AddOrRemoveCoffee>
            <button>
              <Minus size={14} weight="bold" />
            </button>
            1
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </AddOrRemoveCoffee>
          <RemoveItem>
            <Trash size={16} />
            REMOVER
          </RemoveItem>
        </SelectedCoffeeButtons>
      </SelectedCoffeeInteraction>
    </SelectedCoffeeContainer>
  );
}
