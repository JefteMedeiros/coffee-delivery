import React, { useEffect, useState } from "react";
import {
  AddOrRemove,
  ButtonContainer,
  CardContainer,
  CartButton,
  CoffeeType,
  Description,
  InteractionContainer,
  Price,
  PriceTag,
  Title,
} from "./styles";

import { Minus, Plus, ShoppingCart } from "phosphor-react";

const CoffeeCard: React.FC = () => {
  return (
    <CardContainer>
      <img src="../../../public/images/Type=Americano.png" alt="" />
      <CoffeeType>TRADICIONAL</CoffeeType>
      <Title>Expresso Tradicional</Title>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
      <InteractionContainer>
        <Price>
          R$
          <PriceTag>9,90</PriceTag>
        </Price>
        <ButtonContainer>
          <AddOrRemove>
            <button>
              <Minus size={14} />
            </button>
            1
            <button>
              <Plus size={14} />
            </button>
          </AddOrRemove>
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </ButtonContainer>
      </InteractionContainer>
    </CardContainer>
  );
};

export default CoffeeCard;
