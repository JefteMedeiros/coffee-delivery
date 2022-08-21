import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme["background"]};
  position: sticky;
  top: 0;
  z-index: 9999;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: 70rem;

  padding: 2rem 0;
`;

export const HeaderInteraction = styled.section`
  display: flex;
  gap: 0.75rem;

  button {
    display: flex;
    padding: 8px;
    border-radius: 6px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Location = styled.button`
  display: flex;
  align-items: center;

  font-size: 0.875rem;
  color: ${(props) => props.theme["dark-purple"]};
  background-color: ${(props) => props.theme["light-purple"]};

  svg {
    color: ${(props) => props.theme["purple"]};
    margin-right: 0.25rem;
  }

  &:focus {
    border: 1px solid ${(props) => props.theme["dark-purple"]};
  }
`;

export const CartButton = styled.button`
  position: relative;
  background-color: ${(props) => props.theme["light-yellow"]};

  svg {
    color: ${(props) => props.theme["dark-yellow"]};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme["dark-yellow"]};
  }
`;

export const CartItemCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 1.75rem;
  left: 1.75rem;

  color: ${(props) => props.theme["white"]};
  font-weight: bold;

  background-color: ${(props) => props.theme["dark-yellow"]};

  border-radius: 9999px;
  width: 1.25rem;
  height: 1.25rem;
`;
