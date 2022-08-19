import {
  AddOrRemove,
  ButtonContainer,
  CardContainer,
  CartButton,
  CoffeeType,
  CoffeeTypeContainer,
  Description,
  InteractionContainer,
  Price,
  PriceTag,
  Title,
} from "./styles";

import { Coffee } from "../../@types/coffee";

import { Minus, Plus, ShoppingCart } from "phosphor-react";

export function CoffeeCard(props: Coffee) {
  return (
    <CardContainer>
      <img src={props.pic} alt="" />
      <CoffeeTypeContainer>
        {props.category.map((category) => {
          return(
            <CoffeeType>{category}</CoffeeType>
          )
        })}
      </CoffeeTypeContainer>
      <Title>{props.name}</Title>
      <Description>{props.description}</Description>
      <InteractionContainer>
        <Price>
          R$ <PriceTag>{props.price.toString().replaceAll(".", ",")}</PriceTag>
        </Price>
        <ButtonContainer>
          <AddOrRemove>
            <button>
              <Minus size={14} weight="bold" />
            </button>
            1
            <button>
              <Plus size={14} weight="bold" />
            </button>
          </AddOrRemove>
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </ButtonContainer>
      </InteractionContainer>
    </CardContainer>
  );
}
