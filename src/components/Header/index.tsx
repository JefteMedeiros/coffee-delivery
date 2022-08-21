import { MapPin, ShoppingCart } from "phosphor-react";
import {
  CartButton,
  CartItemCount,
  HeaderContainer,
  HeaderContent,
  HeaderInteraction,
  Location,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src="Logo.svg" alt="" />
        <HeaderInteraction>
          <Location>
            <MapPin weight="fill" size={22} />
            Porto Alegre, RS
          </Location>
          <CartButton>
            <CartItemCount>2</CartItemCount>
            <ShoppingCart weight="fill" size={22} />
          </CartButton>
        </HeaderInteraction>
      </HeaderContent>
    </HeaderContainer>
  );
}
