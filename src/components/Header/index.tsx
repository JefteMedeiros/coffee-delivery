import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <img src="Logo.svg" alt="" />
        </Link>
        <HeaderInteraction>
          <Location>
            <MapPin weight="fill" size={22} />
            Porto Alegre, RS
          </Location>
          <Link to="/InitiateCheckout"> 
            <CartButton>
              <CartItemCount>2</CartItemCount>
              <ShoppingCart weight="fill" size={22} />
            </CartButton>
          </Link>
        </HeaderInteraction>
      </HeaderContent>
    </HeaderContainer>
  );
}
