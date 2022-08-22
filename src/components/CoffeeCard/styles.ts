import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  height: 19.375rem;

  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;
  padding: 1.25rem;
  border-bottom-left-radius: 36px;
  border-top-right-radius: 36px;

  img {
    top: -1.25rem;
    position: absolute;
    width: 7.5rem;
  }
`;

export const CoffeeTypeContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const CoffeeType = styled.span`
  font-weight: bold;
  font-size: 0.625rem;
  margin-bottom: 1rem;
  border-radius: 9999px;
  padding: 0.25rem 0.5rem;
  color: ${(props) => props.theme["dark-yellow"]};
  background-color: ${(props) => props.theme["light-yellow"]};
`;

export const Title = styled.h1`
  color: ${(props) => props.theme["base-subtitle"]};
  font-family: "Baloo 2", sans-serif;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

export const Description = styled.h2`
  font-size: 0.875rem;
  font-weight: lighter;
  color: ${(props) => props.theme["base-label"]};
`;

export const InteractionContainer = styled.div`
  margin-top: 2.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 910px) {
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
  }
`;

export const ButtonContainer = styled.span`
  display: flex;
  gap: 0.5rem;
`;

export const Price = styled.div`
  color: ${(props) => props.theme["base-text"]};
  font-size: 0.875rem;
`;

export const PriceTag = styled.span`
  font-family: "Baloo 2", sans-serif;
  font-weight: 1000;
  font-size: 1.5rem;
`;

export const CartButton = styled.button`
  display: flex;

  background-color: ${(props) => props.theme["dark-purple"]};
  border-radius: 6px;
  padding: 0.5rem;
  transition: all 200ms;

  svg {
    color: ${(props) => props.theme["white"]};
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme["purple"]};
  }
`;

export const AddOrRemove = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 6px;

  padding: 0.5625rem 0.5rem;
  background-color: ${(props) => props.theme["base-button"]};

  svg {
    color: ${(props) => props.theme["purple"]};
    font-weight: bold;
  }

  button {
    display: flex;
    background: transparent;
    transition: all 200ms;

    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme["dark-purple"]};
    }
  }
`;
