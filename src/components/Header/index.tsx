import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { ButtonContainer, CartButton, HeaderContainer, LocationSelect } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src="Logo.svg" />
      <ButtonContainer>
        <LocationSelect>
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </LocationSelect>
        <NavLink to={"/initiateCheckout"}>
          <CartButton>
            <ShoppingCart size={32} weight={"fill"}/>
          </CartButton>
        </NavLink>
      </ButtonContainer>
    </HeaderContainer>
  )
}