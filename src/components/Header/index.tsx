import { ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { ButtonContainer, CartButton, HeaderContainer, LocationSelect } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src="Logo.svg" />
      <ButtonContainer>
        <LocationSelect>
          <option value="Lugar">Local</option>
          <option value="Lugar">Local</option>
          <option value="Lugar">Local</option>
        </LocationSelect>
        <NavLink to={"/initiateCheckout"}>
          <CartButton>
            <ShoppingCart size={32} />
          </CartButton>
        </NavLink>
      </ButtonContainer>
    </HeaderContainer>
  )
}