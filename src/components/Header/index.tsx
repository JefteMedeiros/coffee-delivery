import { MapPin, ShoppingCart } from "phosphor-react";
import { CartButton, CartItemCount, HeaderContainer, HeaderInteraction, Location } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src="Logo.svg" alt="" />
      <HeaderInteraction>
        <Location>
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </Location>
        <CartButton>
          <CartItemCount>
            2
          </CartItemCount>
          <ShoppingCart weight="fill" size={22} />
        </CartButton>
      </HeaderInteraction>
    </HeaderContainer>
  );
}
