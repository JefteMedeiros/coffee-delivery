import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
`;

export const HeaderInteraction = styled.section`
  display: flex;
  gap: 0.75rem;

  button {
    padding: 0.5rem;
    border-radius: 6px;
    border: none;
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
`;

export const CartButton = styled.button`
  position: relative;
  background-color: ${(props) => props.theme["light-yellow"]};

  svg {
    color: ${(props) => props.theme["dark-yellow"]};
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
